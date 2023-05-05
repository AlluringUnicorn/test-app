import axios from "axios";

axios.defaults.baseURL = "https://6449776eb88a78a8f008a9de.mockapi.io";

export async function fetchUsers() {
  try {
    const { data } = await axios.get("/users");
    return data;
  } catch (error) {
    console.log(error);
  }
}
