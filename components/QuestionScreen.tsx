
import React from 'react';
import { Question, MBTI_Dimension } from '../types';
import PixelButton from './PixelButton';

interface QuestionScreenProps {
  question: Question;
  onAnswer: (type: MBTI_Dimension) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  onAnswer,
  currentQuestionIndex,
  totalQuestions,
}) => {
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 flex flex-col justify-center animate-fadeIn">
      <div className="mb-8">
        <p className="text-center text-lg text-yellow-400 mb-2">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
        <div className="w-full bg-gray-700 border-2 border-gray-500">
          <div
            className="bg-green-500 h-6 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 md:p-8 border-4 border-gray-600 mb-8">
        <h2 className="text-2xl md:text-3xl text-center text-white leading-relaxed">
          {question.text}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PixelButton onClick={() => onAnswer(question.choices[0].type)} variant="primary">
          {question.choices[0].text}
        </PixelButton>
        <PixelButton onClick={() => onAnswer(question.choices[1].type)} variant="secondary">
          {question.choices[1].text}
        </PixelButton>
      </div>
    </div>
  );
};

export default QuestionScreen;
