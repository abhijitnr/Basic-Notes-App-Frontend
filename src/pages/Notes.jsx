import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/notes`, {
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(notes);
  return <div>Notes</div>;
};

export default Notes;
