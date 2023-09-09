import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  // State to store user input values for updating
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Get the 'id' parameter from the URL using React Router's 'useParams' hook
  const { id } = useParams();

  // React Router's useNavigate hook for navigation
  const navigate = useNavigate();

  // Fetch user data from the server when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:3333/users/" + id)
      .then((res) => {
        // Populate the input fields with user data from the server
        setValue({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
        });
      })
      .catch((err) => console.error(err));
  }, [id]); // Make sure to include 'id' in the dependency array to re-fetch data when it changes

  // Function to handle form submission for updating user data
  const handelUpdate = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Send a PUT request to update user data on form submission
    axios
      .put("http://localhost:3333/users/" + id, value)
      .then((res) => {
        console.log(res); // Log the response from the server (you can update this logic as needed)

        // Navigate back to the home page after successful update
        navigate("/");
      })
      .catch((err) => console.error(err)); // Log any errors that occur during the PUT request
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 bg-white shadow px-5 py-4 rounded">
        <h1>Update user</h1>
        <form onSubmit={handelUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="form-control"
              value={value.name} // Bind the 'name' field to the state
              onChange={(e) => setValue({ ...value, name: e.target.value })} // Update the 'name' field in the state
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-control"
              value={value.email} // Bind the 'email' field to the state
              onChange={(e) => setValue({ ...value, email: e.target.value })} // Update the 'email' field in the state
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone:{" "}
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone"
              className="form-control"
              value={value.phone} // Bind the 'phone' field to the state
              onChange={(e) => setValue({ ...value, phone: e.target.value })} // Update the 'phone' field in the state
            />
          </div>
          <button className="btn btn-success">Update</button>
          
          {/* Link to navigate back to the home page */}
          <Link to="/" className="btn btn-primary ms-2">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
