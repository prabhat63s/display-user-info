import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Read = () => {
  // State to hold the user data
  const [data, setData] = useState([]);

  // Get the 'id' parameter from the URL using React Router's 'useParams' hook
  const { id } = useParams();

  // Fetch user data from the server when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:3333/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []); // Ensure that this effect runs only once by providing an empty dependency array

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 bg-white shadow border px-5 py-4 rounded">
        <h2 className="">Detail of Users</h2>
        <div className="mb-2">
          <p>Name: {data.name} </p> {/* Display user's name */}
        </div>
        <div className="mb-2">
          <p>Email: {data.email} </p> {/* Display user's email */}
        </div>
        <div className="mb-2">
          <p>Phone: {data.phone} </p> {/* Display user's phone number */}
        </div>
        {/* Link to navigate to the update page for this user */}
        <Link to={`/update/${id}`} className="btn btn-sm btn-success">
          Edit
        </Link>
        {/* Link to navigate back to the home page */}
        <Link to="/" className="btn btn-sm btn-primary ms-2">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
