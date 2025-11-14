import Keycap from "./Keycap";
import LongKeycap from "./LongKeycap";

function Keyboard({ word, setGuessWord, submitAnswer }) {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="first-row d-flex flex-row justify-content-center gap-1 mb-2">
        <Keycap letter="Q" word={word} setWord={setGuessWord} />
        <Keycap letter="W" word={word} setWord={setGuessWord} />
        <Keycap letter="E" word={word} setWord={setGuessWord} />
        <Keycap letter="R" word={word} setWord={setGuessWord} />
        <Keycap letter="T" word={word} setWord={setGuessWord} />
        <Keycap letter="Y" word={word} setWord={setGuessWord} />
        <Keycap letter="U" word={word} setWord={setGuessWord} />
        <Keycap letter="I" word={word} setWord={setGuessWord} />
        <Keycap letter="O" word={word} setWord={setGuessWord} />
        <Keycap letter="P" word={word} setWord={setGuessWord} />
      </div>
      <div className="second-row d-flex flex-row justify-content-center gap-1 mb-2">
        <Keycap letter="A" word={word} setWord={setGuessWord} />
        <Keycap letter="S" word={word} setWord={setGuessWord} />
        <Keycap letter="D" word={word} setWord={setGuessWord} />
        <Keycap letter="F" word={word} setWord={setGuessWord} />
        <Keycap letter="G" word={word} setWord={setGuessWord} />
        <Keycap letter="H" word={word} setWord={setGuessWord} />
        <Keycap letter="J" word={word} setWord={setGuessWord} />
        <Keycap letter="K" word={word} setWord={setGuessWord} />
        <Keycap letter="L" word={word} setWord={setGuessWord} />
      </div>
      <div className="third-row d-flex flex-row justify-content-center gap-1 mb-2">
        <LongKeycap
          letter={<i className="bi bi-arrow-left"></i>}
          word={word}
          setWord={setGuessWord}
        />
        <Keycap letter="Z" word={word} setWord={setGuessWord} />
        <Keycap letter="X" word={word} setWord={setGuessWord} />
        <Keycap letter="C" word={word} setWord={setGuessWord} />
        <Keycap letter="V" word={word} setWord={setGuessWord} />
        <Keycap letter="B" word={word} setWord={setGuessWord} />
        <Keycap letter="N" word={word} setWord={setGuessWord} />
        <Keycap letter="M" word={word} setWord={setGuessWord} />
        <LongKeycap letter="ENTER" submitAnswer={submitAnswer} />
      </div>
    </div>
  );
}

export default Keyboard;
