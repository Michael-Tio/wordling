import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import AttemptWord from "./assets/components/AttemptWord";
import Keyboard from "./assets/components/keyboard/Keyboard";
import { wordlist } from "./wordlist";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTitle, setOverlayTitle] = useState("");
  const [overlayDesc, setOverlayDesc] = useState("");

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const [guesses, setGuesses] = useState([]);
  const [guessWord, setGuessWord] = useState("");
  const [answer, setAnswer] = useState("");

  const resetGame = () => {
    setGuesses([]);
    setGuessWord("");
    setAnswer(
      wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase()
    );
  };

  const submitAnswer = () => {
    if (guessWord.length === 5) {
      const isRealWord = wordlist.includes(guessWord.toLowerCase());
      if (isRealWord) {
        const isCorrect = answer.toUpperCase() === guessWord.toUpperCase();
        if (isCorrect) {
          toggleOverlay();
          setOverlayTitle("You win 😁");
          setOverlayDesc(
            "Congratulations! You got the word right. Click the button below to play again."
          );
          resetGame();
        } else {
          setGuesses((prev) => [...prev, guessWord.toUpperCase()]);
          setGuessWord("");
        }
      } else {
        toast.error("Invalid word! Try again.");
      }
    } else {
      toast.error("Need to be 5 letters word");
    }
  };

  useEffect(() => {
    if (guesses.length === 6) {
      const resetGameData = () => {
        toggleOverlay();
        setOverlayTitle("You lose 😔");
        setOverlayDesc(
          `You didn't guess the correct word. The correct word was "${answer}". Feel free to try again.`
        );

        resetGame();
      };
      resetGameData();
    }
  }, [guesses]);

  useEffect(() => {
    const chosenWord =
      wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase();
    const pickAnswer = () => {
      setAnswer(chosenWord);
    };
    pickAnswer();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (key === "Enter") {
        submitAnswer();
        return;
      }

      if (key === "Backspace") {
        setGuessWord((prev) => prev.slice(0, -1));
        return;
      }

      if (key.length === 1 && /^[a-zA-Z]$/.test(key)) {
        setGuessWord((prev) => {
          if (prev.length < 5) {
            return prev + key.toUpperCase();
          }
          return prev;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessWord]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="container min-vh-100 d-flex flex-column align-items-center">
        <h1 className="fw-bold mt-3">WORDLING</h1>
        <h6>Created by: Michael Andreas P</h6>
        <div className="mt-4">
          <AttemptWord
            attemptCount={1}
            guesses={guesses}
            guessWord={guessWord}
            answer={answer}
          />
          <AttemptWord
            attemptCount={2}
            guesses={guesses}
            guessWord={guessWord}
            answer={answer}
          />
          <AttemptWord
            attemptCount={3}
            guesses={guesses}
            guessWord={guessWord}
            answer={answer}
          />
          <AttemptWord
            attemptCount={4}
            guesses={guesses}
            guessWord={guessWord}
            answer={answer}
          />
          <AttemptWord
            attemptCount={5}
            guesses={guesses}
            guessWord={guessWord}
            answer={answer}
          />
          <AttemptWord
            attemptCount={6}
            guesses={guesses}
            guessWord={guessWord}
            answer={answer}
          />
        </div>
        <Keyboard
          word={guessWord}
          setGuessWord={setGuessWord}
          submitAnswer={submitAnswer}
        />
        {showOverlay && (
          <div
            className="position-absolute top-0 left-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
            style={{
              zIndex: 1000,
            }}
          >
            <div className="overlay-card card d-flex flex-column align-items-center">
              <h5 className="fw-bold overlay-title">{overlayTitle}</h5>
              <p className="text-center overlay-desc">{overlayDesc}</p>
              <button onClick={toggleOverlay} className="btn-new-game">
                New game
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
