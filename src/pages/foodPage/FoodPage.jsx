import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { FoodContext } from "../../context/FoodContext";
import "./FoodPage.css";

const FoodPage = () => {
  const { style } = useContext(ThemeColorContext);
  const { getAllFood, allFood } = useContext(FoodContext);

  useEffect(() => {
    getAllFood();
  }, []);

  return (
    <div className="foodPageMain">
      <h1>Dina Måltider</h1>
      {allFood.map((food) => (
        <div key={food.id} className="foodPageContainer">
          <p>{food.mealType}</p>
          <p>{food.content}</p>
          <p>{food.calories}</p>
          <p>{food.date}</p>
          <button style={style}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default FoodPage;
