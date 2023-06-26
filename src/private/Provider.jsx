import { createContext, useState } from "react";
import app from '../assets/Firebase_sdk'
export const userContext = createContext(null)
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [refetch, setRefetch] = useState(true);
    const [loading, setLoading] = useState(true);
    const providerData = {
        user, setUser, refetch, setRefetch, loading, setLoading
    }
    return (
        <userContext.Provider value={providerData}>
            {children}
        </userContext.Provider>
    );
};

export default Provider;