import { useState } from "react";
import { Link } from "react-router-dom";
function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();

  const students = JSON.parse(localStorage.getItem("students")) || [];

  students.push(formData);

  localStorage.setItem("students", JSON.stringify(students));

  alert("The student is registered successfully!");
};

  return (
    <div>
      <h1>Add Students</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br/>
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br/>
        <div>
          <label>Course: </label>
          <input 
            type="text" 
            name="course" 
            value={formData.course} 
            onChange={handleChange} 
            required 
          />
        </div><br/>
        <div>Phone Number:
          <input type="number" name="phone number" required/>

        </div><br/>
        <div>
          Gender:
          <input type="text" name="gender "required/>
        </div>

        <button type="submit" style={{ textAlign: "center" }}>Register</button>
      </form>
      <li><Link to="/display">View Students</Link></li>
    </div>
  );
}

export default AddStudent;

