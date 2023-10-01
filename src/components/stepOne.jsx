import React, { useState, useEffect } from "react";
import Rock from "../assets/images/icon-rock.svg";
import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Rules from "../assets/images/image-rules.svg";
import { AiOutlineClose } from "react-icons/ai";

function StepOne() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
  };

  const getHouseChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };

  const handlePlayAgain = () => {
    setPlayerChoice("");
    setHouseChoice("");
    setResult("");
    setScore(0);
  };

  const handleRules = () => {
    const rules = document.querySelector(".img__rules");
    rules.classList.toggle("hidden");
  }

  const handleCloseRules = () => {
    const rules = document.querySelector(".img__rules");
    rules.classList.add("hidden");
  }

  useEffect(() => {
    setHouseChoice(getHouseChoice());
  }, [playerChoice]);

  useEffect(() => {
    if (playerChoice !== "") {
      if (
        (playerChoice === "rock" && houseChoice === "scissors") ||
        (playerChoice === "paper" && houseChoice === "rock") ||
        (playerChoice === "scissors" && houseChoice === "paper")
      ) {
        setResult("YOU WIN");
        setScore((prevScore) => prevScore + 1);
      } else if (
        (playerChoice === "rock" && houseChoice === "paper") ||
        (playerChoice === "paper" && houseChoice === "scissors") ||
        (playerChoice === "scissors" && houseChoice === "rock")
      ) {
        setResult("YOU LOSE");
        setScore((prevScore) => prevScore - 1);
      } else {
        setResult("DRAW");
        setScore((prevScore) => prevScore + 0);
      }
    }
  }, [playerChoice, houseChoice]);

  useEffect(() => {
    if (score < 0) {
      setScore(0);
    }
  }, [score]);

  return (
    <section className="stepOne">
      <div className="header">
        <h1 className="title">
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
          <br />
        </h1>
        <div className="score">
          <p className="score__title">SCORE</p>
          <p className="score__number">{score}</p>
        </div>
      </div>
      <ul className="game">
        <li className="paper" id="paper">
          <img
            className="img__paper"
            src={Paper}
            alt="Paper"
            onClick={() => handlePlayerChoice("paper")}
          />
        </li>
        <li className="rock" id="rock">
          <img
            className="img__rock"
            src={Rock}
            alt="Rock"
            onClick={() => handlePlayerChoice("rock")}
          />
        </li>
        <li className="scissors" id="scissors">
          <img
            className="img__scissors"
            src={Scissors}
            alt="Scissors"
            onClick={() => handlePlayerChoice("scissors")}
          />
        </li>
      </ul>
      <div className="result">
        <div className="result__player">
          <p className="result__title">YOU PICKED</p>
          <div className="result__player__choice">
            {playerChoice === "rock" && (
              <img className="img__rock" src={Rock} alt="Rock" />
            )}
            {playerChoice === "paper" && (
              <img className="img__paper" src={Paper} alt="Paper" />
            )}
            {playerChoice === "scissors" && (
              <img className="img__scissors" src={Scissors} alt="Scissors" />
            )}
          </div>
        </div>
        <div className="result__result">
          <p className="result__title">{result}</p>
          <button className="result__button" onClick={handlePlayAgain}>
            PLAY AGAIN
          </button>
        </div>
        <div className="result__house">
          <p className="result__title">THE HOUSE PICKED</p>
          <div className="result__house__choice">
            {houseChoice === "rock" ? (
              <img className="img__rock" src={Rock} alt="Rock" />
            ) : houseChoice === "paper" ? (
              <img className="img__paper" src={Paper} alt="Paper" />
            ) : houseChoice === "scissors" ? (
              <img className="img__scissors" src={Scissors} alt="Scissors" />
            ) : null}
          </div>
        </div>
      </div>
      <div className="rules">
        <button className="rules__button" onClick={handleRules}>
          RULES
        </button>
      </div>
      <div className="img__rules hidden">
        <div className="rules__header">
          <h1 className="rules__title">RULES</h1>
          <AiOutlineClose className="rules__close" onClick={handleCloseRules} />
        </div>
        <img className="rules__img" src={Rules} alt="Rules" />
      </div>
    </section>
  );
}

export default StepOne;
