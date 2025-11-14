function AttemptLetterBox({ letter, bgColor }) {
  return (
    <div className={`letter-box border border-2 border-dark d-flex align-items-center justify-content-center ${bgColor}`}>
      {letter}
    </div>
  );
}

export default AttemptLetterBox;
