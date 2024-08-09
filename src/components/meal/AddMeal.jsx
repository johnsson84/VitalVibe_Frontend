// CSS
import "./AddMeal.css";

// react
import React from "react";
import { useState, useEffect, useContext } from "react";

// context
import { FoodContext } from "../../context/FoodContext";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { Link } from "react-router-dom";

const AddMeal = () => {
  const { addFood, message } = useContext(FoodContext);
  const { style } = useContext(ThemeColorContext);

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

  //display + button
  const [isDisplayable, setIsDisplayable] = useState(true);

  //affirmation
  const [postOk, setPostOk] = useState(false);

  const handleNewMeal = () => {
    setPostOk(false);
    window.location.reload();
  };

  //food OBJECT
  const [meal, newMeal] = useState({
    userId: loggedInUserId,
    mealType: "",
    content: mealArray,
    calories: "",
  });

  //CONTENT
  const [mealContent, newMealContent] = useState({
    ingredient: "",
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

    if (name === "amount") {
      if (value.trim() === "") {
        setIsDisplayable(false);
      }
      if (value === 0 || value) {
        setIsDisplayable(true);
      }
    }

    newMealContent({ ...mealContent, [name]: value });
  };

  //ADDERA CONTENT TILL CONTENT-ARRAY
  const handleContent = () => {
    const mealContentString = `${mealContent.ingredient} ${mealContent.amount}${mealContent.unit}`;

    setMealArray((prevMealArray) => {
      const newMealArray = [...prevMealArray, mealContentString];

      return newMealArray;
    });

    newMealContent({
      // reset mealContent
      ingredient: "",
      amount: "",
      unit: "",
    });
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (isNaN(paste)) {
      e.preventDefault();
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: "Antal måste vara en siffra",
      }));
    }
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

  // felhanterare (koder och state)

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let errors = {};
    if (!meal.mealType) {
      errors.mealType = "Vänligen välj en måltidstyp.";
    }
    if (!mealContent) {
      errors.content = "Vänligen ange ingredienser.";
    }
    if (!meal.calories) {
      errors.calories = "Vänligen fyll i antal kalorier.";
    }

    if (mealArray.length === 0) {
      errors.contentArray = "Vänligen ange ingredienser.";
    }

    return errors;
  };

  //FETCH
  const handlePublish = () => {
    //sätter fel i errors
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // fetch-metod
    addFood(meal);

    newMeal({
      userId: localStorage.getItem("loggedInUserId"),
      mealType: "",
      content: [],
      calories: "",
    });
    newMealContent({ ingredient: "", amount: "", unit: "" });

    setPostOk(true);
  };

  // --------------------------

  return (
    <main className="addMealMain">
      {!postOk && (
        <div className="addMealContainer">
          <h1>Logga Måltid:</h1>

          <section>
            <div className={`dropdown ${isOpen ? "open" : ""}`}>
              <button
                className={`dropdown-toggle ${
                  selectedOption ? "selected-option" : "placeholder"
                }`}
                onClick={toggleDropdown}
              >
                {selectedOption || "Måltidstyp  ↓"}
              </button>
              {errors.mealType && (
                <p className="mealError">{errors.mealType}</p>
              )}
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
              name="ingredient"
              value={mealContent.ingredient}
              type="text"
              placeholder="Ingrediens:"
            />
            <input
              onChange={handleMealContent}
              name="amount"
              value={mealContent.amount}
              type="number"
              onInput={handleMealContent}
              onPaste={handlePaste}
              placeholder="Antal:"
            />

            <div className="addContentUnitButton">
              <select
                name="unit"
                value={mealContent.unit}
                onChange={handleMealContent}
                className="chooseUnit"
              >
                <option value="">Enhet: </option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="l">l</option>
                <option value="dl">dl</option>
                <option value="st">st</option>
              </select>

              {isDisplayable && (
                <button style={style} onClick={handleContent}>
                  +
                </button>
              )}
              {!isDisplayable && (
                <p className="pCantContain" p>
                  Antal = endast nummer!
                </p>
              )}
            </div>
          </section>
          <section>
            <input
              value={meal.calories}
              onChange={handleMeal}
              type="number"
              name="calories"
              placeholder="Kalorier:"
            />
            {errors.calories && <p className="mealError">{errors.calories}</p>}
          </section>

          <section>
            <div className="contentArray">
              <button
                style={style}
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
                <span>
                  {" "}
                  Inga Ingredienser Tillagda... <br />
                </span>
              )}
            </div>
            {errors.contentArray && (
              <p className="mealError" id="errorContent">
                {errors.contentArray}
              </p>
            )}
          </section>

          <button
            style={style}
            className="publishMealButton"
            onClick={handlePublish}
          >
            PUBLICERA
          </button>
        </div>
      )}
      {postOk && (
        <div className="postOk">
          <p>Din måltid är publicerad!</p>
          <div className="postOkContainer">
            <Link to="/profile">
              <button style={style}>Återgå till profilen</button>
            </Link>
            <button style={style} onClick={handleNewMeal}>
              Logga ny måltid
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default AddMeal;
