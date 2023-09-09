import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  // State to store user input values
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // React Router's useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    axios
      .post("http://localhost:3333/users", value) // Send a POST request to create a new user
      .then((res) => {
        console.log(res); // Log the response from the server (you can update this logic as needed)
        navigate('/'); // Navigate back to the home page after successful submission
      })
      .catch((err) => console.error(err)); // Log any errors that occur during the POST request
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 bg-white shadow px-5 py-4 rounded">
        <h1>Add a user</h1>
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name :{" "}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="form-control"
              onChange={(e) => setValue({ ...value, name: e.target.value })} // Update the 'name' field in the state
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Email :{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-control"
              onChange={(e) => setValue({ ...value, email: e.target.value })} // Update the 'email' field in the state
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Phone :{" "}
            </label>
            <input
              type="phone"
              name="phone"
              placeholder="Enter name"
              className="form-control"
              onChange={(e) => setValue({ ...value, phone: e.target.value })} // Update the 'phone' field in the state
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-2">
            {" "}
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;