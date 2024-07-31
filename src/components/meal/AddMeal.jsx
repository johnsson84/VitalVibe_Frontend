// CSS
import "./AddMeal.css";

// react
import React from "react";
import { useState } from "react";

import Dropdown from "../DropDown/DropDown";

const AddMeal = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  const [meal, newMeal] = useState({
    userId: loggedInUserId,
    mealType: "",
    name: "",
    amount: "",
    calories: "",
  });

  const handleMeal = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMeal({ ...meal, [name]: value });
  };

  const handlePublish = (e) => {
    e.preventDefault();

    //addMeal(meal);    KOMMER VARA FETCH METOD (CONTEXT)

    setActivity({
      activityName: "",
      mealType: "",
      name: "",
      amount: "",
      calories: "",
    });
  };

  return (
    <main className="addMealContainer">
      <h1>Logga Måltid:</h1>
      <section>
        <Dropdown></Dropdown>
      </section>
      <section>
        <input type="text" placeholder="Måltid:" />
      </section>
      <section>
        <input type="number" placeholder="Antal:" />
      </section>
      <section>
        <input type="text" placeholder="Kalorier:" />
      </section>
      <button className="publishMealButton" onClick={handlePublish}>PUBLISH</button>
    </main>
  );
};

export default AddMeal;
