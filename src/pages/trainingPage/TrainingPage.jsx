// PAGES
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import AddTraining from "../../components/training/AddTraining";

// CSS
import "./TrainingPage.css";

const TrainingPage = () => {

    const [reviewValue, setReviewValue] = useState([]);
  const [error, setError] = useState([]);

  const createActivity = async (reviewValue) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/reviews/create`, reviewValue, {withCredentials: true})
      console.log(reviewValue);
    } catch (error) {
      console.log("err: " + error);
      setError(error);
    }
  };

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