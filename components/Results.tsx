type ResultsProps = {
  score: number;
  totalQuestionNumber: number;
  restartQuiz: () => void;
  reviewQuiz: () => void;
};

const Results = ({
  score,
  totalQuestionNumber,
  restartQuiz,
  reviewQuiz,
}: ResultsProps) => {
  return (
    <div>
      <h2>Kết quả</h2>
      <p className="result">
        {" "}
        Bạn trả lời đúng {score} / {totalQuestionNumber} câu
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={reviewQuiz}>
          Xem lại
        </button>
        <button className="result-button" onClick={restartQuiz}>
          Làm lại Quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
