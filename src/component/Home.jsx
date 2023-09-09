import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  // State to hold the list of users
  const [data, setData] = useState([]);

  // useEffect hook to fetch data from the server when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:3333/users")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Function to handle user deletion
  const handelDelete = (id) => {
    // Display a confirmation dialog before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete");

    if (confirmDelete) {
      axios
        .delete("http://localhost:3333/users/" + id)
        .then((res) => {
          // Remove the deleted item from the data state
          setData((prevData) => prevData.filter((d) => d.id !== id));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="d-flex py-4 flex-column align-items-center bg-light vh-100">
      <h1 className="mb-3">List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          {/* Link to navigate to the create user page */}
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  {/* Link to navigate to the read user page */}
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  {/* Link to navigate to the update user page */}
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  {/* Button to trigger user deletion */}
                  <button
                    onClick={(e) => handelDelete(d.id)}
                    className="btn btn-sm btn-danger "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
