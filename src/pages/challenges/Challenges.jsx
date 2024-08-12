import "./Challenges.css";
import { useContext, useEffect, useState } from "react";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { ChallengeContext } from "../../context/ChallengeContext";
import { Link } from "react-router-dom";

const Challenges = () => {
  const { style } = useContext(ThemeColorContext);
  const { getAllChallenges, foundChallenges } = useContext(ChallengeContext);
  

  useEffect(() => {
    getAllChallenges();
  }, []);

  useEffect(() => {
    console.log("Challenges state updated: ", foundChallenges);
  }, [foundChallenges]);

  return (
    <div className="challengeMainContainer">
      <h1>Challenges:</h1>
      <div className="challengeMainContainerTwo">
        {foundChallenges.map((challenge) => (
          <div className="challengeContainer" key={challenge.id}>
            <p>
              Distance:
              {" " + challenge.distance}
            </p>
            <p>
              Ending:
              {" " + challenge.endDate}
            </p>
            <Link to="/profile/training">
              <button style={style}>Registrera Utmaning</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
