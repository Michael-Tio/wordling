function LongKeycap({ letter, word, setWord, submitAnswer }) {
  const doIntendedAction = () => {
    if (letter != "ENTER") {
      if (word.length > 0) {
        setWord(word.slice(0, -1));
      }
    } else if (letter == "ENTER") {
      submitAnswer();
    }
  };

  return (
    <div
      className="longkey-btn px-2 px-sm-4 d-flex align-items-center justify-content-center fw-bold"
      onClick={doIntendedAction}
    >
      {letter}
    </div>
  );
}

export default LongKeycap;
