import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");

  const [User, setUser] = useState({
    UserFirstname: "",
    UserLastName: "",
    UserEmail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh

    console.log("Submitted Name:", name);
    console.log("Submitted LastName:", lastname);
    console.log("Submitted Email:", email);
  };
  return (
    <div>
      <form>
        {/*<form onSubmit={handleSubmit}> also used like this */}
        <label>
          Name:
          <input
            type="text"
            value={name} // Value is controlled by state
            onChange={(e) => setName(e.target.value)} // Update state on change
          />
        </label>
        <br></br>
        <label>
          LastName:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        {/*Methods 2 for large form */}
        <input
          name="firstName"
          value={User.UserFirstname}
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={User.UserLastName}
          onChange={handleChange}
        />
        <input name="email" value={User.UserEmail} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <p>
        Name: {name}
        <br></br>
        LastName: {lastname}
        <br></br>
        Email: {email}
      </p>
    </div>
  );
}
