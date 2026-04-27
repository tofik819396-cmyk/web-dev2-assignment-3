import { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", score: 85 },
    { id: 2, name: "Aman", score: 72 },
    { id: 3, name: "Priya", score: 90 },
    { id: 4, name: "Vikram", score: 65 },
    { id: 5, name: "Sneha", score: 35 },
  ]);

  // Update Score
  const updateScore = (id, newScore) => {
    const clampedScore = Math.max(0, Math.min(100, Number(newScore)));
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: clampedScore } : student
    ));
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Add Student
  const addStudent = (name, score) => {
    const clampedScore = Math.max(0, Math.min(100, Number(score)));
    const newStudent = {
      id: Date.now(),
      name,
      score: clampedScore,
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="container">
      <Header />
      <Stats students={students} />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} deleteStudent={deleteStudent} />
      <Footer />
    </div>
  );
}

export default App;