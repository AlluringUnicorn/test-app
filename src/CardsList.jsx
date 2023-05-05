import { Card } from "./Card";
import { useState, useEffect } from "react";
import { fetchUsers } from "./api";
import css from './CardsList.module.css';

export const CardsList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users));
  }, []);

  return (
    <ul className={css.list}>
      {users.map((user) => (
        <Card user={user.user} followers={user.followers} tweets={user.tweets} key={user.id} />
      ))}
    </ul>
  );
};
