import React, { useState, useEffect, useCallback } from 'react';
import { ExamState, Question, ExamMode } from './types';
import { questionBank } from './data/questions';
import StartScreen from './components/StartScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import FlashcardScreen from './components/FlashcardScreen';
import { hsmaiLogo } from './assets/logo';

// Function to shuffle an array and take the first N elements
const shuffleAndTake = <T,>(array: T[], num: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const App: React.FC = () => {
  const [examState, setExamState] = useState<ExamState>(ExamState.Idle);
  const [examMode, setExamMode] = useState<ExamMode | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  const startExam = useCallback((mode: ExamMode) => {
    let selectedQuestions: Question[];
    
    if (mode === 'exam') {
      selectedQuestions = shuffleAndTake(questionBank, 50);
    } else { // mode === 'flashcard'
      // For flashcards, use all questions and shuffle them
      selectedQuestions = [...questionBank].sort(() => 0.5 - Math.random());
    }
    
    setActiveQuestions(selectedQuestions);
    setUserAnswers(new Array(selectedQuestions.length).fill(null));
    setExamMode(mode);
    setExamState(ExamState.Active);
  }, []);
  
  const restartExam = useCallback(() => {
    setExamState(ExamState.Idle);
    setExamMode(null);
  }, []);

  const handleAnswerSelect = useCallback((questionIndex: number, answerIndex: number) => {
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  }, []);

  const submitExam = useCallback(() => {
    setExamState(ExamState.Completed);
  }, []);

  useEffect(() => {
    // Prefetch an image for a nicer background effect if desired, or other setup
  }, []);

  const renderContent = () => {
    switch (examState) {
      case ExamState.Active:
        if (examMode === 'exam') {
          return (
            <ExamScreen
              questions={activeQuestions}
              userAnswers={userAnswers}
              onAnswerSelect={handleAnswerSelect}
              onSubmit={submitExam}
              onExit={restartExam}
            />
          );
        }
        if (examMode === 'flashcard') {
          return (
            <FlashcardScreen 
              questions={activeQuestions}
              onExit={restartExam}
            />
          );
        }
        // Fallback if mode is not set
        return <StartScreen onStart={startExam} />;

      case ExamState.Completed:
        return (
          <ResultsScreen
            questions={activeQuestions}
            userAnswers={userAnswers}
            onRestart={restartExam}
          />
        );
      case ExamState.Idle:
      default:
        return <StartScreen onStart={startExam} />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-100 font-sans">
       <header className="w-full max-w-5xl mx-auto mb-6">
         <img src={hsmaiLogo} alt="HSMAI Logo" className="h-16 mx-auto sm:mx-0" />
       </header>
        <div className="w-full">
            {renderContent()}
        </div>
        <footer className="text-center text-slate-500 text-sm mt-8">
            <p>&copy; {new Date().getFullYear()} CRME Exam Simulator. For educational purposes only.</p>
        </footer>
    </main>
  );
};

export default App;