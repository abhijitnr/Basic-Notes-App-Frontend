import { Link } from "react-router-dom";
import "./Home.css";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="home_page">
      <div className="notes_navbar">
        <Link to="/createnotes">
          <p className="navbar_tag_notes">CREATE NOTES</p>
        </Link>

        <p className="navbar_tag_notes">|</p>

        <Link to="/allnotes">
          <p className="navbar_tag_notes">ALL THE NOTES</p>
        </Link>
      </div>

      <div className="homepage_image">
        <img className="image" src={home} alt="HOME" />
      </div>
    </div>
  );
};

export default Home;
