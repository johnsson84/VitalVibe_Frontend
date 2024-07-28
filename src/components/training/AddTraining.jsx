// CSS
import "./AddTraining.css";

import { useContext, useEffect, useState } from "react";

import { ActivityContext } from "../../pages/trainingPage/TrainingContext";

const AddTraining = () => {
  const { addActivity, message } = useContext(ActivityContext);

  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage(message);
  }, [message]);

  const [activity, setActivity] = useState({
    userId: loggedInUserId,
    activityName: "",
    distance: "",
    mood: "",
    calories: "",
    time: "",
  });

  const handleActivity = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setActivity({ ...activity, [name]: value });
  };

  const handlePublish = (e) => {
    e.preventDefault();

    addActivity(activity);

    setActivity({
      activityName: "",
      distance: "",
      time: "",
      calories: "",
      mood: "",
    });
  };

  return (
    <div className="addTMain">
      <section>
        <p>Activity:</p>
        <select
          name="activityName"
          placeholder="activity"
          value={activity.activityName}
          required
          onChange={handleActivity}
          className="chooseActivity"
        >
          <option value="">Choose Activity</option>
          <option value="running">Running</option>
          <option value="walking">Walking</option>
          <option value="biking">Biking</option>
        </select>
      </section>
      <section>
        <p>Time:</p>
        <input
          type="number"
          name="time"
          value={activity.time}
          required
          onChange={handleActivity}
          id="time"
        />
        <p>Distance:</p>
        <input
          type="number"
          name="distance"
          value={activity.distance}
          required
          onChange={handleActivity}
          id="distance"
        />
        <p>Calories:</p>
        <input
          type="number"
          name="calories"
          value={activity.calories}
          required
          onChange={handleActivity}
          id="calories"
        />

        <p>Mood:</p>
        <select
          name="mood"
          placeholder="Mood"
          value={activity.mood}
          required
          onChange={handleActivity}
          className="chooseMood"
        >
          <option value="">Choose Mood</option>
          <option value="BAD">Bad</option>
          <option value="AVERAGE">Average</option>
          <option value="GOOD">Good</option>
          <option value="VERYGOOD">Very Good</option>
        </select>
      </section>

      <button type="button" className="publishButton" onClick={handlePublish}>
        PUBLISH
      </button>

      <div className="messageContainer">
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default AddTraining;
