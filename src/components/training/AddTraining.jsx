// CSS
import "./AddTraining.css";

import { useContext, useState } from "react";

import { ActivityContext } from "../../pages/trainingPage/TrainingContext";


const AddTraining = () => {

  const { addActivity } = useContext(ActivityContext);
  
  const [activity, setActivity] = useState({
    activity: "",
    distance: "",
    time: "",
    calories: "",
    mood: "",
  });

  const handleActivity = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setActivity({ ...activity, [name]: value });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(activity) + " this is the acitvity!");

    addActivity(activity);

    console.log("Activity added, check database!");

    setActivity({
      activity: "",
      distance: "",
      time: "",
      calories: "",
      mood: "",
    });
    console.log(JSON.stringify(activity) + " this is the empty acitvity!");
  };

  return (
    <div className="addTMain">
      <section>
        <p>Activity:</p>
        <select
          name="activity"
          placeholder="activity"
          value={activity.activity}
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
          type="text"
          name="time"
          value={activity.time}
          required
          onChange={handleActivity}
          id="time"
        />
        <p>Distance:</p>
        <input
          type="text"
          name="distance"
          value={activity.distance}
          required
          onChange={handleActivity}
          id="distance"
        />
        <p>Calories:</p>
        <input
          type="text"
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
          <option value="GOOD">Bad</option>
          <option value="AVERAGE">Average</option>
          <option value="GOOD">Good</option>
          <option value="VERYGOOD">Very Good</option>
        </select>
      </section>

      <button type="button" onClick={handlePublish}>
        PUBLISH
      </button>
    </div>
  );
};

export default AddTraining;
