import "./ActivityPage.css";
import { useContext, useEffect, useState } from "react";
import { ActivityContext } from "../../context/TrainingContext";
import LoggedActivities from "../../components/activities/LoggedActivities";

const ActivityPage = () => {

  return (
    <div className="activityPage">
      <div className="activityPageLogged">
        <h1 id="activityPageTitle">Loggade Aktiviteter</h1>
        <LoggedActivities></LoggedActivities>
      </div>
    </div>
  );
};

export default ActivityPage;
