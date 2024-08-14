import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ChallengeItem.css";

const ChallengeItem = ({ challenge, style }) => {
  const targetDate = new Date(challenge.endDate);
  const [timeLeft, setTimeLeft] = useState(setTheTimeLeft());
  const [noChallenge, setNoChallenge] = useState("");

  useEffect(() => {
    if (challenge === null) {
      setNoChallenge("Det finns inga utmaningar.");
    } else {
      setNoChallenge("");
    }

    console.log("noChallenge: " + noChallenge);
  }, [challenge]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(setTheTimeLeft());
    }, 1000);

    //om tiden gått ut
    return () => clearInterval(timer);
  }, []);

  function setTheTimeLeft() {
    const now = new Date();
    const difference = targetDate - now; //räknar ut endtime jämför med nu

    if (difference <= 0) return {}; //om tiden gått ut

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const timeLeftToString = (object) => {
    return Object.entries(object)
      .map(([key, value]) => {
        switch (key) {
          case "days":
            return `${value} dagar`;
          case "hours":
            return `${value} timmar`;
          case "minutes":
            return `${value} minuter`;
          case "seconds":
            return `${value} sekunder`;
          default:
            return `${value}`;
        }
      })
      .join(", ");
  };

  return (
    <div className="challengeContainer">
      {noChallenge}
      <p>Distans:{" " + challenge.distance}</p>
      <p>Slutar om:{" " + timeLeftToString(timeLeft)}</p>
      <Link to="/profile/training">
        <button style={style}>Registrera Utmaning</button>
      </Link>
    </div>
  );
};

export default ChallengeItem;
