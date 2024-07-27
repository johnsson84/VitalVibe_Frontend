// PAGES
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import AddMeal from "../../components/meal/AddMeal";

// CSS
import "./MealPage.css";

const MealPage = () => {
  return (
    <main>
      <div className="mealMain">
        <div className="mealHeader">
          <Header></Header>
        </div>
        <div className="meal">
          <Sidebar></Sidebar>
          <AddMeal></AddMeal>
        </div>
      </div>
    </main>
  );
};

export default MealPage;
