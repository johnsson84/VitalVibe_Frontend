import { useContext, useEffect, useState } from "react";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { FoodContext } from "../../context/FoodContext";
import "./FoodPage.css";

const FoodPage = () => {
  const { style } = useContext(ThemeColorContext);
  const { getAllFood, allFood, deleteFood } = useContext(FoodContext);
  const [foodList, setFoodList] = useState([]); 

  useEffect(() => {
    getAllFood();
  }, []);

  useEffect(() => {
    if (allFood) {
      setFoodList(allFood);
    }
  }, [allFood]);

  const handleClick = (foodId) => {
    deleteFood(foodId).then(() => {
      setFoodList(prevFoodList => prevFoodList.filter(food => food.id !== foodId));
    });
  };

  return (
    <div className="foodPageMain">
      <h1>Dina Måltider</h1>
      {foodList.map((food) => (
        <div key={food.id} className="foodPageContainer">
          <button style={style} onClick={() => handleClick(food.id)}>
            Radera
          </button>
          <p>Måltid: {food.mealType}</p>
          <p>Ingredienser: {food.content}</p>
          <p>Kalorier: {food.calories}</p>
          <p>Datum: {food.date}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodPage;