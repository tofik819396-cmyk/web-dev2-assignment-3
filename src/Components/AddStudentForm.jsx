import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !score) return;

    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        min="0"
        max="100"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;