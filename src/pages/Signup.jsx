import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };

    fetch(`https://good-tan-jaguar-tutu.cyclic.app/auth/signup`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    navigate("/login");
  };

  return (
    <div className="signup">
      <p className="signup_heading">NOTES APP SIGNUP</p>
      <div>
        <p className="signup_field">Name :</p>
        <input className="signup_input" type="text" placeholder="Name" />
      </div>

      <div>
        <p className="signup_field"> Email :</p>
        <input
          className="signup_input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <p className="signup_field">Password :</p>
        <input
          className="signup_input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="signup_button">
        <button className="signup_button_click" onClick={handleSubmit}>
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default Signup;
