import React from "react";

import { useContext, useState, createContext } from "react";

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {

  // Lägg till en aktivitet
  const addActivity = async (acitvity) => {
    var activityOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        userId: `${acitvity.userId}`,
        activityName: `${acitvity.activityName}`,
        distance: `${acitvity.distance}`,
        time: acitvity.time,
        calories: `${acitvity.calories}`,
        mood: `${acitvity.mood}`,
      }),
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/activity/create`,
        activityOptions
      );

      const data = await res.json();

      if (data.statusCodeValue === 200) {
        window.location.href = "/profile";
      }
    } catch (error) {
      if (error) {
        //setMessage(data[1].status);
        //console.log(data);
      }
    }
  };

  // Lista alla aktiviteter från en user.
  const [foundActivities, setFoundActivities] = useState({});

  const listActivities = async (userId) => {

    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/activity/list-all/${userId}`,
        options
      );

      const data = await res.json();
      setFoundActivities(data);

    } catch (error) {
      console.log(error);
    }

  }

  // Delete an activity
  const deleteActivity = async (activityId) => {

    var options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/activity/delete/${activityId}`,
        options
      );

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <ActivityContext.Provider value={{ addActivity, listActivities, foundActivities, setFoundActivities, deleteActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
