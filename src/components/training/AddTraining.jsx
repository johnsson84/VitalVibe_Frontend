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

    // Check if the value is an empty string or a valid number
    if (value === "" || /^\d+$/.test(value)) {
      setTime({ ...time, [name]: value });
      
    } else {
      setTime({ ...time, [name]: "" }); // Reset the state if invalid input
      
    }
  };

  // felhanterare (koder och state)

  const [errors, setErrors] = useState({});

  const validateInputsAndFields = () => {
    let errors = {};
    if (!activity.activityName) {
      errors.activityName = "Ange Aktivitet.";
    }
    if (!activity.calories) {
      errors.calories = "Ange Kalorier.";
    }
    if (!activity.distance) {
      errors.distance = "Ange Distans.";
    }

    if (!activity.mood) {
      errors.mood = "Ange hur ditt pass kändes.";
    }
    
    if (time.minutes === "" || time.seconds === ""){
      errors.time = "Ange tid (OBS: Endast siffror)"
    }
      return errors;
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

    console.log(time)

    //sätter fel i errors
    const checkErrors = validateInputsAndFields();
    if (Object.keys(checkErrors).length > 0) {
      setErrors(checkErrors);
      return;
    }

    

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
      <section className="activitySection">
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
      {errors.activityName && (
        <p className="activityErrorAct">{errors.activityName}</p>
      )}
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
        {errors.time && <p className="activityErrorTim">{errors.time} </p>}
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
        {errors.distance && (
          <p className="activityErrorDis">{errors.distance}</p>
        )}
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
        {errors.calories && (
          <p className="activityErrorCal">{errors.calories}</p>
        )}

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
        {errors.mood && <p className="activityErrorMoo">{errors.mood}</p>}
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
