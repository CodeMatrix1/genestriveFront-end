import React from "react";
import QuestionRenderer from "../../components/QuestionRenderer";

function MCQs({ Input }) {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    setSelectedAnswers,
    selectedAnswersbyid,
    setSelectedAnswersbyid,
  } = Input;
  const handleOptionSelect = (optionIndex, id) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
    const newSelectedAnswersbyid = [...selectedAnswersbyid];
    newSelectedAnswersbyid[id] = optionIndex;
    setSelectedAnswersbyid(newSelectedAnswersbyid);
  };
  // Handler for option selection
  return (
    <div className="space-y-4">
      {currentQuestion.options.map((option, optionIndex) => {
        const isSelected =
          selectedAnswers[currentQuestionIndex] === optionIndex;
        let bgColor = "bg-white";
        let borderColor = "border-[#d9d9d9]";
         
        if (isSelected) {
          bgColor = "bg-[#f7ecff]";
          borderColor = "border-[#5e2f7c]";
        }

        return (
          <div
            key={optionIndex}
            className={`w-full ${bgColor} border ${borderColor} p-4 rounded-md cursor-pointer`}
            onClick={() => handleOptionSelect(optionIndex, currentQuestion.id)}
          >
            <span className="font-medium text-[#2f2f68] text-[32px]">
              <QuestionRenderer content={option.text} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default MCQs;
