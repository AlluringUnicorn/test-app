import { Card } from "./Card";
import { useState, useEffect } from "react";
import { fetchUsers } from "./api";
import css from "./styles/CardsList.module.css";
import Notiflix from "notiflix";

export const CardsList = ({ users, setUsers, filteredUsers }) => {
  const [page, setPage] = useState(2);

  const loadmore = (event) => {
    fetchUsers({ page: page, limit: 3 }).then((api_users) => {
      if (api_users.length === 0) {
        event.target.disabled = true;
        localStorage.setItem("btn_disabled", true);
        Notiflix.Notify.failure("Oops, there are no more tweets:(");
      }
      setUsers((prevState) => [...prevState, ...api_users]);
    });

    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    try {
      fetchUsers().then((users) => setUsers(users));
    } catch (error) {
      console.log(error);
    }
  }, [setUsers]);

  return (
    <>
      <ul className={css.list}>
        {filteredUsers.length > 0
          ? filteredUsers.map((user) => (
              <Card
                user={user}
                key={user.id}
                setUsers={setUsers}
                users={users}
              />
            ))
          : users.map((user) => (
              <Card
                user={user}
                key={user.id}
                setUsers={setUsers}
                users={users}
              />
            ))}

        {/* {users.map((user) => (
          <Card user={user} key={user.id} setUsers={setUsers} users={users} />
        ))} */}
      </ul>
      <div className={css.btn_div}>
        <button onClick={loadmore} className={css.btn} disabled={false}>
          Load more
        </button>
      </div>
    </>
  );
};
