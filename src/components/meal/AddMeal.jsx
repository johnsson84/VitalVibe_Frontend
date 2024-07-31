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
    calories: "",
  });
  const [mealContent, newMealContent] = useState({
    name: "",
    amount: "",
    unit: "",
  });
  const [mealArray, setMealArray] = useState([]);

  const handleMeal = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMeal({ ...meal, [name]: value });
  };

  const handleMealContent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMealContent({ ...mealContent, [name]: value });
  };

  const handleContent = () => {
    setMealArray([...mealArray, mealContent]);
    console.log("mealContent: ", mealContent);
    console.log("mealArray: ", mealArray);

    newMealContent({
      // reset mealContent
      name: "",
      amount: "",
      unit: "",
    });
  };

  const handlePublish = (e) => {
    e.preventDefault();

    //addMeal(meal);    KOMMER VARA FETCH METOD (CONTEXT)

    setMeal({
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
      <section className="addContent">
        <input
          onChange={handleMealContent}
          name="name"
          value={mealContent.name}
          type="text"
          placeholder="Ingrediens:"
        />
        <input
          onChange={handleMealContent}
          name="amount"
          value={mealContent.amount}
          type="number"
          placeholder="Antal:"
        />

        <select
          name="unit"
          value={mealContent.unit}
          onChange={handleMealContent}
          className="chooseUnit"
          required
        >
          <option value="">Enhet:</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
          <option value="l">l</option>
          <option value="dl">dl</option>
          <option value="st">st</option>
        </select>

        <button onClick={handleContent}>+</button>
      </section>
      <section>
        <input type="text" placeholder="Kalorier:" />
      </section>

      <section className="contentArray">
        Ingredienser:{" "}
        {mealArray.length > 0
          ? mealArray.map((meal, index) => (
              <div className="contentArrayDiv" key={index}>
                <span>{meal.name}</span> - <span>{meal.amount}</span>{" "}
                <span>{meal.unit}</span>-{" "}
                <span>
                  <button className="removeContentButton">radera</button>
                </span>
              </div>
            ))
          : "No meals available"}
      </section>

      <button className="publishMealButton" onClick={handlePublish}>
        PUBLISERA
      </button>
    </main>
  );
};

export default AddMeal;
