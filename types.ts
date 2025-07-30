export enum Screen {
  START,
  QUESTION,
  LOADING,
  RESULT,
}

export type MBTI_Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Choice {
  text: string;
  type: MBTI_Dimension;
}

export interface Question {
  text: string;
  choices: [Choice, Choice];
}

export type Answers = {
  [key in MBTI_Dimension]: number;
};

export interface LearningTypeResult {
  title: string;
  description: string;
  tips: string[];
  image?: string;
}