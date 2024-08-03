import { authenticate } from "../../helper/functions"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const auth = authenticate();
    return auth ? children : <Navigate to="/login"></Navigate>

}

export default PrivateRoute;