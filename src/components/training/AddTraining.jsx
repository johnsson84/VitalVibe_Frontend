// CSS
import "./AddTraining.css";

import { useContext, useEffect, useState } from "react";

import { ActivityContext } from "../../context/TrainingContext";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";

const AddTraining = () => {
  const { addActivity, message } = useContext(ActivityContext);
  const { style } = useContext(ThemeColorContext);

  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  const [errorMessage, setErrorMessage] = useState("");
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

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

  const handleDistance = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDistance({ ...distance, [name]: value });
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
      <section >
        <p>Time:</p>
        <div className="timeDiv">
          <input
            className="timeInput"
            type="number"
            name="hours"
            value={time.hours}
            required
            onChange={handleDistance}
            placeholder="h"
            id="hours"
            min="0"
          />
          <input
            className="timeInput"
            type="number"
            name="minutes"
            value={time.minutes}
            required
            onChange={handleDistance}
            placeholder="min"
            id="minutes"
            min="0"
          />
          <input
            className="timeInput"
            type="number"
            name="seconds"
            value={time.seconds}
            required
            onChange={handleDistance}
            placeholder="sec"
            id="seconds"
            min="0"
          />
        </div>
        <p>Distance:</p>
        <input
          className="addNumberInput"
          type="number"
          name="distance"
          value={activity.distance}
          required
          onChange={handleActivity}
          id="distance"
          placeholder="km"
          min="0"
        />
        <p>Calories:</p>
        <input
        className="addNumberInput"
          type="number"
          name="calories"
          value={activity.calories}
          required
          onChange={handleActivity}
          id="calories"
          min="0"
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

      <button
        style={style}
        type="button"
        className="publishButton"
        onClick={handlePublish}
      >
        PUBLISH
      </button>

      <div className="messageContainer">
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default AddTraining;
