import { useContext, useEffect, useState } from "react";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { ChallengeContext } from "../../context/ChallengeContext";
import { Link } from "react-router-dom";
import ChallengeItem from "../../components/challenge/ChallengeItem";
import "./Challenges.css";

const Challenges = () => {
  const { style } = useContext(ThemeColorContext);
  const { getAllChallenges, foundChallenges } = useContext(ChallengeContext);
  const [isChallengeEmpty, setIsChallengeEmpty] = useState(false);

  useEffect(() => {
    getAllChallenges();
  }, []);

  useEffect(() => {
    

    if (foundChallenges.length < 1) {
      setIsChallengeEmpty(true);
    } else {
      setIsChallengeEmpty(false);
    }
    
  }, [foundChallenges]);

  return (
    <div className="challengeMainContainer">
      <h1>Utmaningar:</h1>
      <div className="challengeMainContainerTwo">
        {foundChallenges.map((challenge) => (
          <ChallengeItem
            key={challenge.id}
            challenge={challenge}
            style={style}
          />
        ))}
      </div>

      {isChallengeEmpty && (
        <div className="challengeMainContainerThree">
          <p className="noChallenges">
            Det finns för tillfället inga utmaningar, återkom igen lite senare.
          </p>
          <Link to="/profile">
            <button style={style}>Tillbaka</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Challenges;
