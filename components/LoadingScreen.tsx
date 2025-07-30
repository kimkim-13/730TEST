
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="w-16 h-16 mb-4 grid grid-cols-4 gap-1 animate-pulse">
        <div className="w-3 h-3 bg-yellow-400 animate-ping delay-0"></div>
        <div className="w-3 h-3 bg-blue-400 animate-ping delay-75"></div>
        <div className="w-3 h-3 bg-green-400 animate-ping delay-150"></div>
        <div className="w-3 h-3 bg-red-400 animate-ping delay-200"></div>
        <div className="w-3 h-3 bg-purple-400 animate-ping delay-300"></div>
        <div className="w-3 h-3 bg-pink-400 animate-ping delay-400"></div>
        <div className="w-3 h-3 bg-indigo-400 animate-ping delay-500"></div>
        <div className="w-3 h-3 bg-teal-400 animate-ping delay-600"></div>
      </div>
      <h2 className="text-xl md:text-2xl text-white">The AI Oracle is consulting the stars...</h2>
      <p className="text-gray-400 mt-2">Crafting your destiny...</p>
    </div>
  );
};

export default LoadingScreen;
