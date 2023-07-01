import { NavLink } from "react-router-dom";
import link from './activelink.module.css'
// eslint-disable-next-line react/prop-types
const Activelink = ({ children, to }) => {
    return (
        <NavLink to={to} className={({ isActive, isPending }) => isActive ? link.active  : isPending ? link.pending : link.deafultlink
        }>{children} </NavLink >
    );
};

export default Activelink;