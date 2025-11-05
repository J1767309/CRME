import React, { useState, useCallback } from 'react';
import { Question } from '../types';
import { useTimer } from '../hooks/useTimer';

interface ExamScreenProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onAnswerSelect: (questionIndex: number, answerIndex: number) => void;
  onSubmit: () => void;
}

const ExamScreen: React.FC<ExamScreenProps> = ({ questions, userAnswers, onAnswerSelect, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const EXAM_DURATION = 3600; // 60 minutes in seconds

  const handleTimeUp = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  const { displayTime } = useTimer(EXAM_DURATION, handleTimeUp);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const answeredQuestionsCount = userAnswers.filter(answer => answer !== null).length;
  const completionPercentage = (answeredQuestionsCount / questions.length) * 100;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-sm text-slate-600 font-medium">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span className="font-semibold text-hsmai-purple" aria-label={`${completionPercentage.toFixed(0)}% of questions answered`}>
            {completionPercentage.toFixed(0)}% Complete ({answeredQuestionsCount}/{questions.length})
          </span>
          <div className="flex items-center text-hsmai-purple">
             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="font-semibold">Time Remaining: {displayTime}</span>
          </div>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5" role="progressbar" aria-valuenow={completionPercentage} aria-valuemin="0" aria-valuemax="100">
          <div className="bg-hsmai-purple h-2.5 rounded-full transition-all duration-300" style={{ width: `${completionPercentage}%` }}></div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 leading-tight">{currentQuestion.questionText}</h2>
      </div>

      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(currentQuestionIndex, index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start text-slate-700
              ${userAnswers[currentQuestionIndex] === index
                ? 'bg-purple-100 border-hsmai-purple ring-2 ring-purple-300'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
          >
            <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 mt-1 flex items-center justify-center ${userAnswers[currentQuestionIndex] === index ? 'border-hsmai-purple bg-hsmai-purple' : 'border-slate-300'}`}>
              {userAnswers[currentQuestionIndex] === index && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
            </span>
            <span>{option}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="w-full sm:w-auto px-6 py-3 font-semibold text-slate-700 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        {currentQuestionIndex === questions.length - 1 ? (
          <button
            onClick={onSubmit}
            className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-hsmai-green rounded-lg hover:bg-green-700 transition-colors shadow-md"
          >
            Submit Exam
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-hsmai-purple rounded-lg hover:bg-purple-700 transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ExamScreen;