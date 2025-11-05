import React from 'react';
import { Question } from '../types';

interface ResultsScreenProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ questions, userAnswers, onRestart }) => {
  const correctAnswersCount = questions.reduce((count, question, index) => {
    return question.correctAnswerIndex === userAnswers[index] ? count + 1 : count;
  }, 0);

  const score = (correctAnswersCount / questions.length) * 100;
  
  const getCategoryPerformance = () => {
    const categories: { [key: string]: { correct: number; total: number } } = {};
    questions.forEach((q, i) => {
      if (!categories[q.category]) {
        categories[q.category] = { correct: 0, total: 0 };
      }
      categories[q.category].total++;
      if (q.correctAnswerIndex === userAnswers[i]) {
        categories[q.category].correct++;
      }
    });
    return Object.entries(categories)
      .map(([name, data]) => ({ name, score: (data.correct / data.total) * 100 }))
      .sort((a, b) => a.score - b.score);
  };
  
  const categoryPerformance = getCategoryPerformance();
  const studyAreas = categoryPerformance.filter(cat => cat.score < 75);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-5xl w-full mx-auto">
      <div className="text-center border-b border-slate-200 pb-6 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Exam Results</h1>
        <p className="text-lg text-slate-600 mt-2">Here's how you performed.</p>
        <div className="mt-6">
          <div className={`text-6xl font-bold ${score >= 70 ? 'text-green-600' : 'text-red-500'}`}>{score.toFixed(0)}%</div>
          <div className="text-slate-700 font-medium mt-1">
            You answered {correctAnswersCount} out of {questions.length} questions correctly.
          </div>
        </div>
      </div>
      
      {studyAreas.length > 0 && (
        <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <h2 className="text-xl font-semibold text-amber-800 mb-3">Recommended Study Areas</h2>
          <p className="text-amber-700 mb-4">You may want to spend more time reviewing the following topics based on your results:</p>
          <ul className="list-disc list-inside space-y-1 text-amber-700 font-medium">
            {studyAreas.map(area => <li key={area.name}>{area.name}</li>)}
          </ul>
        </div>
      )}

      <h2 className="text-2xl font-bold text-slate-800 mb-4">Question Review</h2>
      <div className="space-y-6">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = question.correctAnswerIndex === userAnswer;
          
          return (
            <div key={question.id} className="p-4 border border-slate-200 rounded-lg">
              <p className="font-semibold text-slate-800 mb-3">{index + 1}. {question.questionText}</p>
              
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isUserAnswer = userAnswer === optionIndex;
                  const isCorrectAnswer = question.correctAnswerIndex === optionIndex;
                  let optionClass = "text-slate-600";
                  if(isCorrectAnswer) optionClass = "text-green-700 font-semibold";
                  if(isUserAnswer && !isCorrect) optionClass = "text-red-700 font-semibold";

                  return (
                    <div key={optionIndex} className={`flex items-start p-2 rounded ${isCorrectAnswer ? 'bg-green-50' : ''} ${isUserAnswer && !isCorrect ? 'bg-red-50' : ''}`}>
                      {isCorrectAnswer && <span className="mr-2 text-green-500">✓</span>}
                      {isUserAnswer && !isCorrect && <span className="mr-2 text-red-500">✗</span>}
                      {!isCorrectAnswer && !isUserAnswer && <span className="w-6 mr-2"></span>}
                      <p className={optionClass}>{option}</p>
                    </div>
                  );
                })}
              </div>
              
              {!isCorrect && (
                <div className="mt-4 p-3 bg-slate-100 rounded-md text-sm">
                  <p className="text-slate-800"><span className="font-bold">Explanation:</span> {question.feedback.text}</p>
                  <p className="text-slate-600 mt-1"><span className="font-bold">Textbook Reference:</span> {question.feedback.reference}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={onRestart}
          className="bg-hsmai-purple text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Take Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;