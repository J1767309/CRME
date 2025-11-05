import React, { useState, useEffect, useCallback } from 'react';
import { Question } from '../types';

interface FlashcardScreenProps {
  questions: Question[];
  onExit: () => void;
}

const FlashcardScreen: React.FC<FlashcardScreenProps> = ({ questions, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    }
  }, [currentIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    }
  }, [currentIndex]);

  const handleSelectOption = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswer(index);
      setIsAnswered(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrevious]);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-auto">
      <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-slate-700">Flashcards</h2>
        <div className="text-center text-slate-500 font-medium">Card {currentIndex + 1} of {questions.length}</div>
        <button onClick={onExit} className="font-semibold text-hsmai-purple hover:underline">Exit</button>
      </div>

      <div className="mb-8 min-h-[6rem] flex items-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 leading-tight">{currentQuestion.questionText}</h3>
      </div>

      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => {
          const isCorrectAnswer = index === currentQuestion.correctAnswerIndex;
          const isSelectedAnswer = index === selectedAnswer;

          const getOptionStyling = () => {
            if (!isAnswered) {
              return {
                button: 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-400 cursor-pointer',
                span: 'border-slate-300 group-hover:border-slate-400',
                icon: null,
                text: 'text-slate-700'
              };
            }

            if (isCorrectAnswer) {
              return {
                button: 'bg-green-100 border-green-500 cursor-default',
                span: 'border-green-500 bg-green-500',
                icon: <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>,
                text: 'text-green-800 font-semibold'
              };
            }

            if (isSelectedAnswer) {
              return {
                button: 'bg-red-100 border-red-500 cursor-default',
                span: 'border-red-500 bg-red-500',
                icon: <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>,
                text: 'text-red-800 font-semibold'
              };
            }
            
            return {
              button: 'bg-slate-50 border-slate-200 opacity-60 cursor-default',
              span: 'border-slate-300',
              icon: null,
              text: 'text-slate-600'
            };
          };

          const styles = getOptionStyling();

          return (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              disabled={isAnswered}
              className={`group w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start ${styles.button}`}
            >
              <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 mt-1 flex items-center justify-center transition-colors ${styles.span}`}>
                {styles.icon}
              </span>
              <span className={styles.text}>{option}</span>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-6 p-4 bg-slate-100 rounded-lg border border-slate-200 animate-fade-in">
          <p className="text-slate-800"><span className="font-bold">Explanation:</span> {currentQuestion.feedback.text}</p>
          <p className="text-slate-600 mt-2"><span className="font-bold">Textbook Reference:</span> {currentQuestion.feedback.reference}</p>
        </div>
      )}

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-6 py-3 font-semibold text-slate-700 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="px-6 py-3 font-semibold text-white bg-hsmai-purple rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onExit}
          className="w-full max-w-md px-8 py-4 font-bold text-lg text-white bg-hsmai-green rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default FlashcardScreen;

// Add a simple fade-in animation for the feedback box
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
`;
document.head.appendChild(style);
