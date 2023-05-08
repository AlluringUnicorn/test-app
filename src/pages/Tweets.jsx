import { CardsList } from "../CardsList";
import { Dropdown } from "../Dropdown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import css from "./Tweets.module.css";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state);

  return (
    <>
      <button type="button" className={css.btn}>
        <Link to={backLinkLocationRef.current} className={css.link}>
          Go back
        </Link>
      </button>
      <Dropdown
        users={users}
        setFilteredUsers={setFilteredUsers}
      />
      <CardsList
        users={users}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
      />
    </>
  );
};
