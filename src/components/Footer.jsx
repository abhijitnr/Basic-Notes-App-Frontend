import "./Footer.css";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social_media_icon">
        <div className="social_media">
          <a href="https://github.com/abhijitnr" target="_blank">
            <img className="social_icon" src={github} alt="GITHUB" />
          </a>
        </div>

        <div className="social_media">
          <a
            href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
            target="_blank"
          >
            <img className="social_icon" src={linkedin} alt="LINKEDIN" />
          </a>
        </div>

        <div className="social_media">
          <a href="https://www.instagram.com/abhijit.gyans/" target="_blank">
            <img className="social_icon" src={instagram} alt="INSTAGRAM" />
          </a>
        </div>

        <div className="social_media">
          <a href="https://www.youtube.com/@GYANSforGYANI" target="_blank">
            <img className="social_icon" src={youtube} alt="YOUTUBE" />
          </a>
        </div>
      </div>

      <div>
        <p className="copyright">
          Designed and Developed by Abhijit Biswas,© Copyright 2023. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
