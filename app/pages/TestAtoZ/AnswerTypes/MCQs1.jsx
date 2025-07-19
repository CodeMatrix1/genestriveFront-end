import React, { useEffect, useState } from "react";
import QuestionRenderer from "../../components/QuestionRenderer";

function MCQs1({ Input }) {
  if (!Input) return null;

  const { currentQuestion } = Input;

  if (!currentQuestion || !Array.isArray(currentQuestion.options)) {
    return (
      <p className="text-red-600 text-lg">No question or options available</p>
    );
  }

  const solution = currentQuestion.solution || "No solution provided.";

  return (
    <div className="space-y-4 mt-4">
      {currentQuestion.options.map((option, index) => (
        <div
          key={index}
          className="w-full p-4 rounded-lg bg-white text-[#2f2f68] text-lg border border-gray-300 shadow-sm hover:shadow-md transition duration-200"
        >
          <span className="font-medium">
            <QuestionRenderer content={option.text} />
          </span>
        </div>
      ))}

      <div>
        <p className="text-lg font-semibold text-[#2f2f68] mb-2">Solution</p>
        <div className="w-full border border-blue-400 bg-blue-50 p-4 rounded-md text-[18px] text-[#2f2f68]">
          {solution}
        </div>
      </div>
    </div>
  );
}

export default MCQs1;
