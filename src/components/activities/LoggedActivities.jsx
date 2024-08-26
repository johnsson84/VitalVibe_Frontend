import "./LoggedActivities.css";
import { ActivityContext } from "../../context/TrainingContext";
import { useState, useContext, useEffect } from "react";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import ActivitiesEditModal from "./ActivitiesEditModal";

const LoggedActivities = () => {
  // Get loggedInUserId from Local Storage
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  const {style} = useContext(ThemeColorContext);

  const {
    listActivities,
    foundActivities,
    setFoundActivities,
    deleteActivity,
  } = useContext(ActivityContext);

  const [ currentActivities, setCurrentActivities ] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = (activityId) => {
    setShowModal(true);
    setActivityToEdit(activityId);
  } 

  // Run on page load
  useEffect(() => {
    listActivities(loggedInUserId);
  }, []);

  useEffect(() => {
    if (foundActivities) {
      setCurrentActivities(foundActivities);
    }
  }, [foundActivities]);

  // Delete an activity
  const handleDelete = (activityId) => {
    deleteActivity(activityId).then(() => {
      setCurrentActivities(prevActivities => prevActivities.filter(activity => activity.id !== activityId))
    })
  }

  const usersActivities = () => {
    if (Array.isArray(currentActivities)) {
      let foundActivitiesReversed = currentActivities.slice().reverse();
      return (
        <div className="activityPageContent">
          {foundActivitiesReversed.map((activity) => (
            <div key={activity.id} className="activityPageContentBox">
              <div className="activitPageContentInfo">
                <div className="activityContentInfoFields">
                  <div>Type:</div>
                  <div>{activity.activityName}</div>
                </div>
                <div className="activityContentInfoFields">
                  <div>Distance:</div>
                  <div>{activity.distance} km</div>
                </div>
                <div className="activityContentInfoFields">
                  <div>Tid:</div>
                  <div>
                    {Math.floor(activity.time / 3600) !== 0
                      ? `${Math.floor(activity.time / 3600)}tim`
                      : null}{" "}
                    {Math.floor((activity.time % 3600) / 60)}min{" "}
                    {activity.time % 60}sek
                  </div>
                </div>
                <div className="activityContentInfoFields">
                  <div>Datum:</div>
                  <div>{activity.date}</div>
                </div>
                <div className="activityContentInfoFields">
                  <div>Kalorier:</div>
                  <div>{activity.calories}</div>
                </div>
                <div className="activityContentInfoFields">
                  <div>Kändes?</div>
                  <div>{checkMood(activity.mood)}</div>
                </div>
              </div>
              <div className="activityPageContentButtons">
                <button className="activityPageContentButton" onClick={() => handleShow(activity.id)}>Edit</button>
                <button className="activityPageContentButton" onClick={() => handleDelete(activity.id)}>Delete</button>
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
        return "Dåligt";
      case "AVERAGE":
        return "Hyffsat";
      case "GOOD":
        return "Bra";
      case "VERY GOOD":
        return "Jättebra!";
    }
  };

 return (
    <div style={style}>
      {usersActivities()}
      <ActivitiesEditModal isOpen={showModal} onClose={handleClose} activityId={activityToEdit}></ActivitiesEditModal>
    </div>
  );
};

export default LoggedActivities;
