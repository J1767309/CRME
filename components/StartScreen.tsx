import React from 'react';
import { ExamMode } from '../types';
import MediaPlayer from './MediaPlayer';

interface StartScreenProps {
  onStart: (mode: ExamMode) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">CRME Practice Exam</h1>
      <p className="text-slate-600 mb-4">
        Welcome to the Certified Revenue Management Executive exam simulator. Choose a study mode below to begin.
      </p>
      <a
        href="https://americas.hsmai.org/certification/certified-hospitality-revenue-management-executive-crme-certification/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-hsmai-green text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-md mb-8"
      >
        Learn More About CRME Certification
      </a>

      {/* Study Mode Selection */}
      <div className="mb-10 pb-10 border-b-2 border-slate-200">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Choose Your Study Mode</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex-1 max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-800">Practice Exam</h3>
            <div className="bg-slate-100 p-4 rounded-lg text-left space-y-3 my-4 text-sm">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-hsmai-purple mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                <p className="text-slate-700">50 randomly selected questions.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-hsmai-purple mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="text-slate-700">60-minute timed session.</p>
              </div>
            </div>
            <button
              onClick={() => onStart('exam')}
              className="w-full bg-hsmai-green text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg"
            >
              Start Exam
            </button>
          </div>

          <div className="flex-1 max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-800">Flashcards</h3>
            <div className="bg-slate-100 p-4 rounded-lg text-left space-y-3 my-4 text-sm">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-hsmai-purple mr-2 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <p className="text-slate-700">Review questions one by one.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-hsmai-purple mr-2 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.695v-2.695" />
                </svg>
                <p className="text-slate-700">Flip cards to see answers instantly.</p>
              </div>
            </div>
            <button
              onClick={() => onStart('flashcard')}
              className="w-full bg-hsmai-purple text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-purple-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
            >
              Start Flashcards
            </button>
          </div>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Learning Resources</h2>
        <div className="space-y-6">
          <MediaPlayer
            src="media/hotel_revenue_optimization.m4a"
            type="audio"
            title="From Logbooks to AI: Total Hotel Revenue Optimization"
          />
          <MediaPlayer
            src="media/science_of_hotel_pricing.mp4"
            type="video"
            title="The Science of Hotel Pricing"
          />
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
