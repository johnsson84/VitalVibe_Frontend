import React from "react";

import { useContext, useState, createContext } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  
  const addFood = async (food) => {
    var foodOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        userId: food.userId,
        mealType: food.mealType,
        content: food.content,
        calories: food.calories
      }),
    };

    try {
        console.log("body: " + foodOptions.body)
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/meal/create`,
        foodOptions
      );

      const data = await res.json();

      

      
    } catch (error) {
      
      
    }
  };

  return (
    <FoodContext.Provider value={{ addFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodProvider };