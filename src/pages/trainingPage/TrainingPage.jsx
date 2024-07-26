// PAGES
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import AddTraining from "../../components/training/AddTraining";

// CSS
import "./TrainingPage.css";

const TrainingPage = () => {

  

    return (
        <main>

            <div className="trainingMain">
                <div className="trainingHeader">
                    <Header></Header>
                </div>
                <div className="training">
                    <Sidebar></Sidebar>
                    <AddTraining></AddTraining>
                </div>
            </div>
            

        </main>
    )
}

export default TrainingPage;