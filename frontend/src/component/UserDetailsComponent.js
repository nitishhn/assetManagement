/*  import React, { useState } from "react";
import { userServices } from "../services/userDetails"; // Update the path accordingly
//import "./AllUsers.css"; // Import the CSS file for styling

function UserDetailsComponent() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchAllUsers = async () => {
    try {
      const userData = await userServices.allUsers();
      setUsers(userData);
    } catch (err) {
      setError("Error fetching user data");
      console.error("Error fetching user data:", err);
    }
  };

  return (
    <div>
      <button onClick={fetchAllUsers}>Get All Users</button>
      {error && <div className="error">{error}</div>}
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th> 
              <th>Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>{" "}
            
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.phone_number}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
}

export default UserDetailsComponent;

*/

import React, { useState } from "react";
import { userServices } from "../services/userDetails"; // Update the path accordingly
import "./UserDetails.css"; // Import the CSS file for styling

function UserDetailsComponent() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchAllUsers = async () => {
    try {
      const userData = await userServices.allUsers();
      setUsers(userData);
    } catch (err) {
      setError("Error fetching user data");
      console.error("Error fetching user data:", err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await userServices.deleteUserById(userId);
      // Refresh the user list after deletion
      fetchAllUsers();
    } catch (err) {
      setError("Error deleting user");
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div className="all-users-container">
      <button className="fetch-button" onClick={fetchAllUsers}>
        Get All Users
      </button>
      {error && <div className="error">{error}</div>}
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th> {/* Be cautious about displaying passwords */}
              <th>Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Role</th>
              <th>Actions</th> {/* Column for actions */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>{" "}
                {/* Ideally, passwords shouldn't be displayed */}
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.phone_number}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteUser(user.user_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
}

export default UserDetailsComponent;
