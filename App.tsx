import React, { useState, useCallback, useEffect } from 'react';
import { Screen, MBTI_Dimension, Answers, LearningTypeResult } from './types';
import { QUESTIONS, INITIAL_ANSWERS } from './constants';
import { getLearningStyleDescription, generateLearningStyleImage } from './services/geminiService';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.START);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<LearningTypeResult | null>(null);
  const [mbtiType, setMbtiType] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setCurrentQuestionIndex(0);
    setAnswers(INITIAL_ANSWERS);
    setResult(null);
    setMbtiType('');
    setError(null);
    setScreen(Screen.QUESTION);
  };

  const calculateAndFetchResult = useCallback(async (finalAnswers: Answers) => {
    setScreen(Screen.LOADING);

    const determinedType = (
      (finalAnswers.E > finalAnswers.I ? 'E' : 'I') +
      (finalAnswers.S > finalAnswers.N ? 'S' : 'N') +
      (finalAnswers.T > finalAnswers.F ? 'T' : 'F') +
      (finalAnswers.J > finalAnswers.P ? 'J' : 'P')
    );
    setMbtiType(determinedType);

    try {
      const learningStyle = await getLearningStyleDescription(determinedType);
      
      try {
        const imageUrl = await generateLearningStyleImage(learningStyle.title, determinedType);
        setResult({ ...learningStyle, image: imageUrl });
      } catch (imageError) {
        console.error(imageError);
        // If image generation fails, still show the text-based results.
        setResult(learningStyle);
      }

    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setScreen(Screen.RESULT);
    }
  }, []);

  const handleAnswer = (type: MBTI_Dimension) => {
    const newAnswers = { ...answers, [type]: answers[type] + 1 };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateAndFetchResult(newAnswers);
    }
  };

  const renderScreen = () => {
    switch (screen) {
      case Screen.START:
        return <StartScreen onStart={handleStart} />;
      case Screen.QUESTION:
        return (
          <QuestionScreen
            question={QUESTIONS[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={QUESTIONS.length}
          />
        );
      case Screen.LOADING:
        return <LoadingScreen />;
      case Screen.RESULT:
        return (
          <ResultScreen
            result={result}
            mbtiType={mbtiType}
            onRestart={handleStart}
            error={error}
          />
        );
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center w-full bg-black bg-opacity-50">
        {renderScreen()}
      </main>
      <footer className="w-full text-center p-4 text-xs text-gray-500" style={{ textShadow: '1px 1px #000' }}>
        © 2025 Kim Jin-jin Copyright
      </footer>
    </div>
  );
};

export default App;
