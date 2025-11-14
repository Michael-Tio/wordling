function Keycap({ letter, word, setWord }) {
  const createWord = () => {
    if (word.length < 5) {
      setWord(word + letter);
    }
  };
  return (
    <div
      className="key-btn d-flex align-items-center justify-content-center fw-bold"
      onClick={createWord}
    >
      {letter}
    </div>
  );
}

export default Keycap;
