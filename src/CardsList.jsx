import { Card } from "./Card";
import { useState, useEffect } from "react";
import { fetchUsers } from "./api";

export const CardsList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <Card user={user.user} followers={user.followers} tweets={user.tweets} key={user.id} />
      ))}
    </ul>
  );
};
