import React from "react";

import { useContext, useState, createContext } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [message, setMessage] = useState([]);
  const addFood = async (food) => {
    var foodOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        userId: `${food.userId}`,
        mealType: `${food.activityName}`,
        content: `${food.distance}`,
        calories: `${food.calories}`
      }),
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/activity/create`,
        foodOptions
      );

      const data = await res.json();

      

      
    } catch (error) {
      
        console.log(data);
      
    }
  };

  return (
    <FoodContext.Provider value={{ addFood, message }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodProvider };