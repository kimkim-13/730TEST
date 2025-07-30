import React from 'react';
import { LearningTypeResult } from '../types';
import PixelButton from './PixelButton';

interface ResultScreenProps {
  result: LearningTypeResult | null;
  mbtiType: string;
  onRestart: () => void;
  error: string | null;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, mbtiType, onRestart, error }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 animate-fadeIn">
      <div className="bg-gray-800 p-6 md:p-8 border-4 border-gray-600">
        <h1 className="text-3xl md:text-4xl text-center text-yellow-400 mb-2">Your Quest is Complete!</h1>
        
        {error ? (
          <div className="text-center text-red-500 mt-8">
            <h2 className="text-2xl mb-4">An Error Occurred!</h2>
            <p>{error}</p>
          </div>
        ) : result ? (
          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl text-center text-green-400 mb-6">
              You are a {mbtiType}: {result.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                    src={result.image || `https://picsum.photos/seed/${mbtiType}/200`} 
                    alt={`8-bit character for ${result.title}`} 
                    className="w-48 h-48 border-4 border-gray-500 bg-gray-700"
                    style={{ imageRendering: 'pixelated' }}
                />
                <div className="flex-1">
                    <p className="text-base text-gray-200 leading-relaxed mb-6">{result.description}</p>
                </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl text-blue-400 mb-4">Your Spellbook of Study Tips:</h3>
              <ul className="list-none space-y-3">
                {result.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-4 font-bold text-lg">{`>`}</span>
                    <span className="text-gray-200">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
           <div className="text-center text-gray-400 mt-8">
            <p>Loading results...</p>
          </div>
        )}

        <div className="text-center mt-12">
          <PixelButton onClick={onRestart} variant="primary">
            Start a New Quest
          </PixelButton>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;