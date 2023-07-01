import { useContext } from "react";
import { userContext } from "./Provider";
import { useLocation, useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
    const loacation = useLocation()
    let navigate = useNavigate()
    const { user, loading } = useContext(userContext)
    if (loading) {
        return <h1>loading</h1>
    }
    if (user) {
        return children
    }
    return navigate(loacation.pathname, { replace: true, state: { from: loacation.pathname } })
};

export default Private;