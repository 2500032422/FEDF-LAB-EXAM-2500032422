import React from 'react'
import { Link } from "react-router-dom";

export default function DisplayData() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
  return (
    <div>
      <h1> I am in DisplayData</h1>
         <p>Here you can view the registered students.</p>
         <ul>
            {students.map((student, index) => (
                <li key={index}>
                    <strong>{student.name}</strong> - {student.email} - {student.course}
                </li>
            ))}
        </ul>
        <li><Link to="/"> Go Home</Link></li>

    </div>
  )
}
