// CSS
import "./AddTraining.css";

import { useContext, useEffect, useState } from "react";

import { ActivityContext } from "../../context/TrainingContext";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";

const AddTraining = () => {
  const { addActivity } = useContext(ActivityContext);
  const { style } = useContext(ThemeColorContext);

  //get loggedInUserId from Local Storage
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  //objcet for time
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  //object activity (this on will be sent to context)
  const [activity, setActivity] = useState({
    userId: loggedInUserId,
    activityName: "",
    distance: "",
    mood: "",
    calories: "",
    time: "",
  });

  //handle all fields except time
  const handleActivity = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setActivity({ ...activity, [name]: value });
  };

  //handles all fields on time
  const handleTime = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTime({ ...time, [name]: value });
  };

  //handle publis/post
  const handlePublish = (e) => {
    e.preventDefault();

    //calculate time to seconds
    let hourSeconds = Number(time.hours) * 3600;
    let minuteSeconds = Number(time.minutes) * 60;
    let secondsSeconds = Number(time.seconds);

    //sum of tot seconds
    let totalSeconds = hourSeconds + minuteSeconds + secondsSeconds;

    //set time in object activity to totalseconds
    activity.time = totalSeconds;

    //fetch/post
    addActivity(activity);

    //reset activity
    setActivity({
      userId: loggedInUserId,
      activityName: "",
      distance: "",
      mood: "",
      calories: "",
      time: "",
    });
    //reset time
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
