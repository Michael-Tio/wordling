import { useEffect, useState } from "react";
import AttemptLetterBox from "./AttemptLetterBox";

function AttemptWord({ attemptCount, guesses, guessWord, answer }) {
  const [bgColorInfo, setBgColorInfo] = useState([]);

  let word = guessWord;
  if (attemptCount > guesses.length + 1) {
    word = "";
  } else if (attemptCount < guesses.length + 1) {
    word = guesses[attemptCount - 1];
  }

  useEffect(() => {
    if (guesses.length < attemptCount) return;

    const currentGuess = guesses[attemptCount - 1];
    const newColors = Array(5).fill("bg-invalid");

    const answerChars = answer.split("");
    const guessChars = currentGuess.split("");

    const answerFreq = {};
    for (let char of answerChars) {
      answerFreq[char] = (answerFreq[char] || 0) + 1;
    }

    for (let i = 0; i < 5; i++) {
      if (guessChars[i] === answerChars[i]) {
        newColors[i] = "bg-success";
        answerFreq[guessChars[i]]--;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (newColors[i] === "bg-success") continue;
      const guessChar = guessChars[i];

      if (answerFreq[guessChar] > 0) {
        newColors[i] = "bg-warning";
        answerFreq[guessChar]--;
      }
    }

    const setBgColor = () => {
      setBgColorInfo(newColors);
    }
    setBgColor();
  }, [guesses, attemptCount, answer]);

  useEffect(() => {
    const resetBgInfo = () => {
      setBgColorInfo([]);
    }
    resetBgInfo();
  }, [answer])
  

  return (
    <div className={`attempt-${attemptCount} d-flex flex-row gap-2 mb-3`}>
      <AttemptLetterBox bgColor={bgColorInfo[0]} letter={word[0]} />
      <AttemptLetterBox bgColor={bgColorInfo[1]} letter={word[1]} />
      <AttemptLetterBox bgColor={bgColorInfo[2]} letter={word[2]} />
      <AttemptLetterBox bgColor={bgColorInfo[3]} letter={word[3]} />
      <AttemptLetterBox bgColor={bgColorInfo[4]} letter={word[4]} />
    </div>
  );
}

export default AttemptWord;
