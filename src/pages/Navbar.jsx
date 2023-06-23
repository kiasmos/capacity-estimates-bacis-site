import user from "../assets/user.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink className="logo" to="/" exact={true}></NavLink>
      <div className="user-menu">
        <img src={user} alt="" className="user-photo" />
        <p className="user-name">Toghrul Rajab</p>
      </div>
    </nav>
  );
}
