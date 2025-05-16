import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);
  const handleClick = (buttonId) => {
    setActiveButton(buttonId); // mark button as active
  };

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setActiveButton(null)
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
    setActiveButton(null)

  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          style={{ backgroundColor: activeButton === 1 ? "aqua" : "" }}
          onClick={() => {
            chooseOption("optionA");
            handleClick(1);
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          style={{ backgroundColor: activeButton === 2 ? "aqua" : "" }}
          onClick={() => {
            chooseOption("optionB");
            handleClick(2);
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          style={{ backgroundColor: activeButton === 3 ? "aqua" : "" }}
          onClick={() => {
            chooseOption("optionC");
            handleClick(3);
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          style={{ backgroundColor: activeButton === 4 ? "aqua" : "" }}
          onClick={() => {
            chooseOption("optionD");
            handleClick(4);
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
