import "./LoggedActivities.css";
import { ActivityContext } from "../../context/TrainingContext";
import { useState, useContext, useEffect } from "react";

const LoggedActivities = () => {
  // Get loggedInUserId from Local Storage
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  const { listActivities, foundActivities } = useContext(ActivityContext);

  const usersActivities = () => {
    if (Array.isArray(foundActivities)) {
      return (
        <div className="activityPageContent">
          {foundActivities.map((activity) => (
            <div key={activity.id} className="activityPageContentBox">
              <div className="activitPageContentInfo">
                Type: {activity.activityName}
                <br></br>
                Distance: {activity.distance} km <br></br>
                Tid:{" "}
                {Math.floor(activity.time / 3600) !== 0
                  ? `${Math.floor(activity.time / 3600)}tim`
                  : null}{" "}
                {Math.floor((activity.time % 3600) / 60)}min{" "}
                {activity.time % 60}sek<br></br>
                Datum: {activity.date}<br></br>
                Kalorier: {activity.calories}<br></br>
                Kändes? {checkMood(activity.mood)}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return <div>Loading...</div>;
  };

  // Översätta mood
  const checkMood = (mood) => {
    switch (mood) {
        case "BAD":
            return "Dåligt"
        case "AVERAGE":
            return "Hyffsat"
        case "GOOD":
            return "Bra"
        case "VERY GOOD":
            return "Jättebra!"        
    }
  }

  // Run on page load
  useEffect(() => {
    listActivities(loggedInUserId);
    // console.log(foundActivities);
  }, []);

  useEffect(() => {

  }, [foundActivities]);

  return (
    <>
        {usersActivities()}
    </>
  )
};

export default LoggedActivities;
