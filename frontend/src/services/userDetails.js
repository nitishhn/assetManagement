/* import axios from "axios";

export let userServices = {
  allUsers,
};

async function allUsers() {
  try {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };

    // Make the GET request with the configured headers
    let response = await axios.get(
      "http://localhost:3002/users/allUsers",
      config // Pass the config object containing the headers
    );

    // Display an alert
    alert("getting all users details");

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error getting all user details:", error);
    throw error;
  }
}

async function DeleteUserById() {
  try {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };

    // Make the GET request with the configured headers
    let response = await axios.get(
      "http://localhost:3002/users/allUsers",
      config // Pass the config object containing the headers
    );

    // Display an alert
    alert("getting all users details");

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error getting all user details:", error);
    throw error;
  }
}
*/

import axios from "axios";

export let userServices = {
  allUsers,
  deleteUserById, // Add the deleteUserById function to the exports
};

async function allUsers() {
  try {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make the GET request with the configured headers
    let response = await axios.get(
      "http://localhost:3002/users/allUsers",
      config
    );

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error getting all user details:", error);
    throw error;
  }
}

async function deleteUserById(userId) {
  try {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make the DELETE request with the configured headers
    let response = await axios.delete(
      `http://localhost:3002/users/deleteUserById/${userId}`,
      config
    );

    // Display an alert
    alert("User deleted successfully");

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
