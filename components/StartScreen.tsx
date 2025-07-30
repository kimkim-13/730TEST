
import React from 'react';
import PixelButton from './PixelButton';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl text-yellow-400 mb-4">8-Bit Learning Quest</h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
        Answer 12 questions to discover your legendary learning style! The AI Oracle will reveal your strengths and hidden potential.
      </p>
      <PixelButton onClick={onStart} variant="primary">
        Start Your Quest!
      </PixelButton>
    </div>
  );
};

export default StartScreen;
