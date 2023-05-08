import axios from "axios";

axios.defaults.baseURL = "https://6449776eb88a78a8f008a9de.mockapi.io";

export async function fetchUsers(
  params = {
    page: 1,
    limit: 3,
  }
) {
  const { data } = await axios.get("/users", {
    params: params,
  });
  return data;
}

export async function changeFollowers(id, userUpd) {
  const { data } = await axios.put(`/users/${id}`, userUpd);
  return data;
}

export async function fetchUser(id) {
  const { data } = await axios.put(`/users/${id}`);
  return data;
}
