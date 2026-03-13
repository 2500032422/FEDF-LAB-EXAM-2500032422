import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
       <nav >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Register">Add Student</Link></li>
          <li><Link to="/api-demo">API Demo</Link></li>
          <li><Link to="/display">View Students</Link></li>
        </ul>
      </nav>
    </div>
  )
}
