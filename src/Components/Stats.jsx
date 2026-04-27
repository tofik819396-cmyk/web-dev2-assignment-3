import React from 'react';
import { useState } from 'react';
function Stats({ students }) {
  const totalStudents = students.length;
  const passedStudents = students.filter(student => student.score >= 40).length;
  const averageMarks = students.length > 0 ? (students.reduce((sum, student) => sum + student.score, 0) / students.length).toFixed(2) : 0;

  return (
    <>
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Students</h3>
        <p>{totalStudents}</p>
      </div>
      <div className="stat-card">
        <h3>Passed Students</h3>
        <p>{passedStudents}</p>
      </div>
      <div className="stat-card">
        <h3>Average Marks</h3>
        <p>{averageMarks}</p>
      </div>
    </div>
    </>
  );
}

export default Stats;