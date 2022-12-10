import { useState } from "react";
import "./Signup.css";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState([]);
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    const payload = {
      title,
      note,
      category,
      author,
    };

    fetch("https://good-tan-jaguar-tutu.cyclic.app/notes/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup">
      <p className="signup_heading">CRAETE NOTES</p>
      <div>
        <p className="signup_field">Title :</p>
        <input
          className="signup_input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <p className="signup_field"> Note :</p>
        <input
          className="signup_input"
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div>
        <p className="signup_field">Category :</p>
        <input
          className="signup_input"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <p className="signup_field">Author :</p>
        <input
          className="signup_input"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="signup_button">
        <button className="signup_button_click" onClick={handleSubmit}>
          CRAETE NOTES
        </button>
      </div>
    </div>
  );
};

export default CreateNotes;

// title
// note
// category
// author
