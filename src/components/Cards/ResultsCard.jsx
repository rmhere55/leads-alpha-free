import React from "react";
import resultImage from "../../assets/result.png"; // Update with actual path

const ResultsCard = () => {
  return (
    <div className="results-container">
        <div className="img-card">
      <img src={resultImage} alt="Result Overview" className="result-image" />
      </div>
      <div className="results-text">
        <div>
          <h2>+88.9m</h2>
          <p>Views</p>
        </div>
        <div>
          <h2>+77%</h2>
          <p>Engagement rate</p>
        </div>
        <div>
          <h2>+683k</h2>
          <p>Likes</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
