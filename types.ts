
export interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: Feedback;
  category: string;
}

export interface Feedback {
  text: string;
  reference: string;
}

export enum ExamState {
  Idle,
  Active,
  Completed,
}

export type ExamMode = 'exam' | 'flashcard';
