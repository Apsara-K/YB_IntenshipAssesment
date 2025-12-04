import React, { useState } from "react";

export default function BasicDetailsPage() {
  const [page, setPage] = useState("home");

  const [details, setDetails] = useState({
    name: "Apsara",
    age: "20",
    email: "2315010@nec.edu.in",
    city: "Tirunelveli",
    school: "AVRmV Matriculation Higher Secondary School",
    college: "National Engineering College"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });

    // Simple validations
    let error = "";
    if (["name", "city", "school", "college"].includes(name)) {
      if (/[^a-zA-Z\s]/.test(value)) error = "Only letters allowed";
    } else if (name === "age") {
      if (/[^0-9]/.test(value)) error = "Only numbers allowed";
    } else if (name === "email") {
      if (!value.includes("@")) error = "Invalid email";
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSave = () => {
    for (let key in errors) {
      if (errors[key]) {
        alert("Please fix errors before saving!");
        return;
      }
    }
    setPage("home");
  };

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
        }

        .top-nav {
          background: #4a90e2;
          padding: 15px;
          color: white;
          font-size: 22px;
          font-weight: bold;
          text-align: center;
        }

        .bottom-nav {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .nav-btn {
          padding: 8px 18px;
          background: #e0e0e0;
          border: 1px solid gray;
          cursor: pointer;
          border-radius: 5px;
        }

        .nav-btn:hover {
          background: #d0d0d0;
        }

        .center-area {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          flex: 1;
          text-align: center;
        }

        table {
          border-collapse: collapse;
          width: 350px;
          font-size: 16px;
        }

        td {
          border: 1px solid black;
          padding: 10px;
          text-align: center;
        }

        tr:nth-child(even) {
          background: #f0f8ff;
        }

        .about-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 20px;
          object-fit: cover;
          border: 2px solid black;
        }

        input {
          padding: 5px;
          margin: 5px 0;
          width: 250px;
        }

        .save-btn {
          padding: 8px 18px;
          background: #4a90e2;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .save-btn:hover {
          background: #357ab8;
        }

        .error {
          color: red;
          font-size: 14px;
        }
      `}</style>

      <div className="top-nav">My Website</div>

      <div className="bottom-nav">
        <button className="nav-btn" onClick={() => setPage("home")}>Home</button>
        <button className="nav-btn" onClick={() => setPage("about")}>About Me</button>
        <button className="nav-btn" onClick={() => setPage("form")}>Form</button>
      </div>

      
      {page === "home" && (
        <div className="center-area">
          <h2>My Details</h2>
          <table>
            <tr><td>Name</td><td>{details.name}</td></tr>
            <tr><td>Age</td><td>{details.age}</td></tr>
            <tr><td>Email</td><td>{details.email}</td></tr>
            <tr><td>City</td><td>{details.city}</td></tr>
          </table>

          <h3>Education Details</h3>
          <table>
            <tr><td>School</td><td>{details.school}</td></tr>
            <tr><td>College</td><td>{details.college}</td></tr>
          </table>
        </div>
      )}

      {page === "about" && (
        <div className="center-area">
          <h2>About Me</h2>
          <img src="mypic.jpg" className="about-img" alt="My Photo" />
          <p style={{ width: "60%", fontSize: "18px", lineHeight: "1.6" }}>
            Hello! I am <b>{details.name}</b>. I study at <b>{details.college}</b>. I like web development.
          </p>
        </div>
      )}

      {page === "form" && (
        <div className="center-area">
          <h2>Edit Home Details</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="name" placeholder="Name" value={details.name} onChange={handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}<br />

            <input type="text" name="age" placeholder="Age" value={details.age} onChange={handleChange} />
            {errors.age && <div className="error">{errors.age}</div>}<br />

            <input type="text" name="email" placeholder="Email" value={details.email} onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}<br />

            <input type="text" name="city" placeholder="City" value={details.city} onChange={handleChange} />
            {errors.city && <div className="error">{errors.city}</div>}<br />

            <input type="text" name="school" placeholder="School" value={details.school} onChange={handleChange} />
            {errors.school && <div className="error">{errors.school}</div>}<br />

            <input type="text" name="college" placeholder="College" value={details.college} onChange={handleChange} />
            {errors.college && <div className="error">{errors.college}</div>}<br />

            <button className="save-btn" onClick={handleSave}>Save & Go Home</button>
          </form>
        </div>
      )}
    </div>
  );
}
