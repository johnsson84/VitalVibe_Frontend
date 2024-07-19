// CSS
import "./AddTraining.css";

import { useState } from "react";

const AddTraining = () => {
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
    
  }

  return (
    <div className="addTMain">
      <section>
        <p>Activity:</p>
        <select
          name="activity"
          placeholder="activity"
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
        <p>Mood:</p>
        <select
          name="mood"
          placeholder="Mood"
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

      <button type="button" onClick={handlePublish}>PUBLISH</button>
    </div>
  );
};

export default AddTraining;
