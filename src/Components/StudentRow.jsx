import React from "react";
import { useState } from "react";
function StudentRow({ student, updateScore, deleteStudent }) {
  const handleChange = (e) => {
    updateScore(student.id, e.target.value);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      deleteStudent(student.id);
    }
  };

  return (
    <>
    <tr>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={student.score}
          onChange={handleChange}
          min="0"
          max="100"
        />
      </td>
      <td className={student.score >= 40 ? "pass" : "fail"}>
        {student.score >= 40 ? "Pass" : "Fail"}
      </td>
      <td>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </td>
    </tr>
    </>
  );
}

export default StudentRow;