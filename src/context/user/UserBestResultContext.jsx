import React from "react";

import { useContext, useState, createContext, useEffect } from "react";

const UserBestResultContext = createContext();

const UserBestResultProvider = ({ children }) => {
  const currentUser = localStorage.getItem("loggedInUserId");

  const updateRunning = async (bodySeconds) => {
    var RunningOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(bodySeconds),
    };

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/user/updateRunningResults/${currentUser}`,
        RunningOptions
      );

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBiking = async (bodySeconds) => {
    var BikingOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(bodySeconds),
    };

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/user/updateBikingResults/${currentUser}`,
        BikingOptions
      );

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateWalking = async (bodySeconds) => {
    var WalkingOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(bodySeconds),
    };

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/user/updateWalkingResults/${currentUser}`,
        WalkingOptions
      );

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserBestResultContext.Provider
      value={{ updateWalking, updateBiking, updateRunning }}
    >
      {children}
    </UserBestResultContext.Provider>
  );
};

export { UserBestResultContext, UserBestResultProvider };
