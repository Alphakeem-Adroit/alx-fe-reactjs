import axios from "axios";

const API_BASE_URL = "https://api.github.com/users";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${username}`, {
      headers: API_KEY
        ? { Authorization: `Bearer ${API_KEY}` }
        : {},
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // GitHub responded with an error (e.g., 404 user not found)
      throw new Error(error.response.data.message);
    } else {
      // Network error
      throw new Error("Network error. Please try again.");
    }
  }
};
