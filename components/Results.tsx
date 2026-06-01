const Results = ({ score, totalQuestionNumber }) => {
  return (
    <div>
      <h2>Kết quả</h2>
      <p className="result">
        {" "}
        Bạn trả lời đúng {score} / {totalQuestionNumber} câu
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button">Xem lại</button>
        <button className="result-button">Làm lại Quiz</button>
      </div>
    </div>
  );
};
export default Results;
