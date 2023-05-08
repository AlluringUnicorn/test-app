import css from "./styles/Card.module.css";
import { changeFollowers, fetchUser } from "./api";
import { useEffect, useState } from "react";

export const Card = ({ user, setUsers, users }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { name, id, followers, tweets, avatar } = user;

  useEffect(() => {
    const storage = localStorage.getItem(`${id}`);
    if (storage) {
      setIsFollowing(true);
    }
  }, [id, isFollowing]);

  const addFollower = () => {
    setIsFollowing(true);
    localStorage.setItem(`${id}`, true);

    try {
      changeFollowers(id, { followers: followers + 1 }).then(() => {
        fetchUser(id).then((user) => {
          setUsers((prevState) => {
            const upd_user = prevState.findIndex(obj => obj.id === id);
            prevState[upd_user] = user;
            return [...prevState]
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };


  const removeFollower = () => {
    setIsFollowing(false);
    localStorage.removeItem(`${id}`);

    try {
      changeFollowers(id, { followers: followers - 1 }).then(() => {
       fetchUser(id).then((user) => {
          setUsers((prevState) => {
            const upd_user = prevState.findIndex(obj => obj.id === id);
            prevState[upd_user] = user;
            return [...prevState]
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = () => {
    switch (isFollowing) {
      case false:
        addFollower();
        break;
      case true:
        removeFollower();
        break;
      default:
    }
  };

  return (
    <li className={css.card}>
      <img src="/images/logo.png" alt="logo" className={css.logo} />
      <img
        src="/images/main-image.png"
        alt="main-img"
        className={css.main_img}
      />
      <img src="/images/boy.png" alt="frame" className={css.avatar_frame} />
      <img src={avatar} alt="avatar" className={css.avatar}  />
      <img src="/images/rectangle.png" alt="line" className={css.line} />
      <p className={css.user}>{name}</p>
      <p className={css.tweets}>{tweets} Tweets</p>
      <p className={css.followers}> {followers.toLocaleString()} Followers</p>
      <button
        type="button"
        onClick={handleButtonClick}
        className={` ${isFollowing ? css.btn_following : css.btn}`}
        data-id={id}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </li>
  );
};
