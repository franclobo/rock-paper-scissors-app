# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_

### Screenshot

| Desktop version | Mobile version |
|---|---|
| ![image](https://github.com/franclobo/rock-paper-scissors-app/assets/58642949/4be134bb-f870-4b82-8d80-1c582aadd6b1) | ![image](https://github.com/franclobo/rock-paper-scissors-app/assets/58642949/5a9b858b-4993-43be-ae11-7f0f7ab2aa4b) |



### Links

- Solution URL: [Github](https://github.com/franclobo/rock-paper-scissors-app)
- Live Site URL: [Netlify](https://rock-paper-scisors-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://react-icons.github.io/react-icons/) - For styles

### What I learned

I learned how to use styled components and how to use the useState and useEffect hooks to update the state and actions of the game.

To see how you can add code snippets, see below:

```js
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
```

### Continued development

Develop the game in diferent screens to see the game.

### Useful resources

- [React Icons](https://react-icons.github.io/react-icons/) - This helped me for import the icons.

## Author

- Website - [Webminds Studio](https://webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)

## Acknowledgments

Thanks to Frontend Mentor for the challenge.
