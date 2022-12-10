import { useEffect, useState } from "react";
import "./AllNotes.css";

const AllNotes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://good-tan-jaguar-tutu.cyclic.app/notes", {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(false);
        setNotes(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, []);

  // DELETE NOTES
  const deleteNote = (id) => {
    fetch(`https://good-tan-jaguar-tutu.cyclic.app/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Somrthing went wrong !</div>;
  }

  return (
    <div className="allthe_notes">
      <table className="note_table">
        <thead>
          <tr>
            <th>AUTHOR</th>
            <th>TITLE</th>
            <th>NOTES</th>
            <th>CATEGORY</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {notes &&
            notes.length > 0 &&
            notes.map((item) => (
              <tr key={item._id}>
                <td>{item.author}</td>
                <td>{item.title}</td>
                <td>{item.note}</td>
                <td>{item.title}</td>
                <td>
                  <button>EDIT</button>
                </td>
                <td>
                  <button onClick={() => deleteNote(item._id)}>DELETE</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllNotes;

// author
// category
// note
// title
