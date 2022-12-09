import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_heading">
        <Link to="/">
          <p className="app_logo">NOTES APP</p>
        </Link>
      </div>

      <div className="signup_login">
        <Link to="/signup">
          <p className="signup_login_name">SIGNUP</p>
        </Link>
        <Link to="/login">
          <p className="signup_login_name">LOGIN</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
