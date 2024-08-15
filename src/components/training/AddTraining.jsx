// CSS
import "./AddTraining.css";

import { useContext, useEffect, useState } from "react";

import { ActivityContext } from "../../context/TrainingContext";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { UserBestResultContext } from "../../context/user/UserBestResultContext";

import { Link } from "react-router-dom";

const AddTraining = () => {
  //affirmation
  const [postOk, setPostOk] = useState(false);

  const { addActivity } = useContext(ActivityContext);
  const { updateWalking, updateBiking, updateRunning } = useContext(
    UserBestResultContext
  );
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

    if (time.minutes === "" || time.seconds === "") {
      errors.time = "Ange tid (OBS: Endast siffror)";
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

    //sätter fel i errors
    const checkErrors = validateInputsAndFields();
    if (Object.keys(checkErrors).length > 0) {
      setErrors(checkErrors);
      return;
    }

    let body = {};

    //RUNNING
    if (activity.activityName === "running" && activity.distance === "42") {
      body = { marathon: activity.time };
      updateRunning(body);
    }
    if (activity.activityName === "running" && activity.distance === "21") {
      body = { halfmarathon: activity.time };
      updateRunning(body);
    }
    if (activity.activityName === "running" && activity.distance === "15") {
      body = { fifteenkm: activity.time };
      updateRunning(body);
    }
    if (activity.activityName === "running" && activity.distance === "10") {
      body = { tenkm: activity.time };
      updateRunning(body);
    }
    if (activity.activityName === "running" && activity.distance === "5") {
      body = { fivekm: activity.time };
      updateRunning(body);
    }

    //BIKING
    if (activity.activityName === "biking") {
      const bodyObject = {
        ptw_5: activity.time,
        ptw_60s: activity.time,
        ptw_5min: activity.time,
        ptw_60min: activity.time,
      };

      body = bodyObject;
      updateBiking(body);
    }

    //walking
    if (activity.activityName === "walking" && activity.distance === "2") {
      body = { two_km: activity.time };
      console.log(JSON.stringify(body));
      updateWalking(body);
    }
    if (activity.activityName === "walking" && activity.distance === "5") {
      body = { five_km: activity.time };
      updateWalking(body);
    }
    if (activity.activityName === "walking" && activity.distance === "7") {
      body = { seven_km: activity.time };
      updateWalking(body);
    }
    if (activity.activityName === "walking" && activity.distance === "10") {
      body = { ten_km: activity.time };
      updateWalking(body);
    }
    if (activity.activityName === "walking" && activity.distance === "15") {
      body = { fifteen_km: activity.time };
      updateWalking(body);
    }
    if (activity.activityName === "walking" && activity.distance === "20") {
      body = { twenty_km: activity.time };
      updateWalking(body);
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

    setPostOk(true);
  };

  const handleNewActivity = () => {
    setPostOk(false);
    window.location.reload();
  };

  return (
    <div className="addTMain">
      {!postOk && (
        <>
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
        </>
      )}
      {postOk && (
        <div className="postOk">
          <p>Din aktivitet är publicerad!</p>
          <div className="postOkContainer">
            <Link to="/profile">
              <button style={style}>Återgå till profilen</button>
            </Link>
            <button style={style} onClick={handleNewActivity}>
              Logga ny aktivitet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTraining;
