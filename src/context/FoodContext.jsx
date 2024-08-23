import React from "react";

import { useContext, useState, createContext } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [message, setMessage] = useState("");

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
        calories: food.calories,
      }),
    };

    try {
      console.log("body: " + foodOptions.body);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/meal/create`,
        foodOptions
      );

      const data = await res.json();
      console.log("data" + JSON.stringify(data));
      setMessage("Message: " + JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = localStorage.getItem("loggedInUserId");
  const [allFood, setAllFood] = useState([]);

  //get all food
  const getAllFood = async () => {
    var foodOptionsAll = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/meal/list-all/${currentUser}`,
        foodOptionsAll
      );

      const data = await res.json();
      console.log("data get all" + JSON.stringify(data));
      setAllFood(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FoodContext.Provider value={{ addFood, getAllFood, allFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodProvider };
