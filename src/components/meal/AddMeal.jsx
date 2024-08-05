// CSS
import "./AddMeal.css";

// react
import React from "react";
import { useState, useEffect, useContext } from "react";

// context
import { FoodContext } from "../../context/FoodContext";

const AddMeal = () => {
  const { addFood } = useContext(FoodContext);

  // const { style } = useContext(ThemeColorContext);

  //DROPDOWN  {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  //TOGGLE dd OM ÖPPEN ELLER STÄNGD
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //SET dd SETTER
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // Update meal state with new mealType
    newMeal((prevMeal) => ({
      ...prevMeal,
      mealType: option,
    }));
    setIsOpen(false);
  };
  //DROPDOWN OPTIONS
  const options = ["Frukost", "Lunch", "Middag", "Mellanmål"];

  //--------
  // MEAL
  //--------

  //inloggad userId
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  //CONTENT ARRAY
  const [mealArray, setMealArray] = useState([]);

  //food OBJECT
  const [meal, newMeal] = useState({
    userId: loggedInUserId,
    mealType: "",
    content: mealArray,
    calories: "",
  });

  //CONTENT
  const [mealContent, newMealContent] = useState({
    name: "",
    amount: "",
    unit: "",
  });

  //ADDERA TILL OBJECT
  const handleMeal = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMeal({ ...meal, [name]: value });
  };

  //ADDERA TILL CONTENT
  const handleMealContent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMealContent({ ...mealContent, [name]: value });
  };

  //ADDERA CONTENT TILL CONTENT-ARRAY
  const handleContent = () => {
    const mealContentString = `${mealContent.name} ${mealContent.amount}${mealContent.unit}`;

    setMealArray((prevMealArray) => {
      const newMealArray = [...prevMealArray, mealContentString];

      return newMealArray;
    });

    newMealContent({
      // reset mealContent
      name: "",
      amount: "",
      unit: "",
    });
  };

  //TÖM ARRAY MED CONTENT
  const handleDeleteContent = () => {
    setMealArray([]);
  };

  //håll mealArray uppdaterad
  useEffect(() => {
    newMeal((prevMeal) => ({
      ...prevMeal,
      content: mealArray,
    }));
  }, [mealArray]);

  //FETCH
  const handlePublish = () => {
    addFood(meal);

    newMeal({
      userId: localStorage.getItem("loggedInUserId"),
      mealType: "",
      content: [],
      calories: "",
    });
    newMealContent({ name: "", amount: "", unit: "" });
  };

  // --------------------------

  return (
    <main className="addMealContainer">
      <h1>Logga Måltid:</h1>
      <section>
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedOption || "Måltidstyp  ↓"}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {options.map((option, index) => (
                <li
                  value={meal.mealType}
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
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
        <input
          value={meal.calories}
          onChange={handleMeal}
          type="number"
          name="calories"
          placeholder="Kalorier:"
        />
      </section>

      <section className="contentArray">
        {/* style={style} */}
        <button
          onClick={() => handleDeleteContent()}
          className="removeContentButton"
        >
          Töm Ingredienser
        </button>
        Ingredienser: {""}
        {mealArray.length > 0 ? (
          mealArray.map((item, index) => (
            <div className="contentArrayDiv" key={index}>
              {item}
            </div>
          ))
        ) : (
          <span> "Inga Ingredienser Tillagda..." </span>
        )}
      </section>

      {/* style={style} */}
      <button className="publishMealButton" onClick={handlePublish}>
        PUBLISERA
      </button>
    </main>
  );
};

export default AddMeal;
