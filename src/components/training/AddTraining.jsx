// CSS
import "./AddTraining.css";

import { useContext, useEffect, useState } from "react";

import { ActivityContext } from "../../context/TrainingContext";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";

const AddTraining = () => {
  const { addActivity } = useContext(ActivityContext);
  const { style } = useContext(ThemeColorContext);

  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  const [seconds, setSeconds] = useState(0);

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

  const handleTime = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTime({ ...time, [name]: value });
  };

  const handlePublish = (e) => {
    e.preventDefault();

    let hourSeconds = Number(time.hours) * 3600;
    let minuteSeconds = Number(time.minutes) * 60;
    let secondsSeconds = Number(time.seconds);

    let totalSeconds = hourSeconds + minuteSeconds + secondsSeconds;

    activity.time = totalSeconds;

    console.log("tid: " + JSON.stringify(activity));
    console.log("sekunder: " + totalSeconds);

    addActivity(activity);

    setActivity({
      userId: loggedInUserId,
      activityName: "",
      distance: "",
      mood: "",
      calories: "",
      time: "",
    });
    setTime({ hours: "", minutes: "", seconds: "" });
  };

  return (
    <div className="addTMain">
      <section>
        <p>Välj aktivitet:</p>
        <select
          name="activityName"
          placeholder="activity"
          value={activity.activityName}
          required
          onChange={handleActivity}
          className="chooseActivity"
        >
          <option value=""></option>
          <option value="running">Spring</option>
          <option value="walking">Gå</option>
          <option value="biking">Cykla</option>
        </select>
      </section>
      <section>
        <p>Tid:</p>
        <div className="timeDiv">
          <input
            className="timeInput"
            type="number"
            name="hours"
            value={time.hours}
            required
            onChange={handleTime}
            placeholder="h"
            id="hours"
          />
          <input
            className="timeInput"
            type="number"
            name="minutes"
            value={time.minutes}
            required
            onChange={handleTime}
            placeholder="min"
            id="minutes"
          />
          <input
            className="timeInput"
            type="number"
            name="seconds"
            value={time.seconds}
            required
            onChange={handleTime}
            placeholder="sec"
            id="seconds"
          />
        </div>
        <p>Distans:</p>
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
        <p>Kalorier:</p>
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

        <p>Hur kändes det?</p>
        <select
          name="mood"
          placeholder="Mood"
          value={activity.mood}
          required
          onChange={handleActivity}
          className="chooseMood"
        >
          <option value=""></option>
          <option value="BAD">Jobbigt</option>
          <option value="AVERAGE">Hyfsat</option>
          <option value="GOOD">Bra</option>
          <option value="VERYGOOD">Jättebra!</option>
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
    </div>
  );
};

export default AddTraining;
