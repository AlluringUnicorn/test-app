import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./Home.module.css";

export const Home = () => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <h1 className={css.heading}>Follow peoples thoughts</h1>
      <div className={css.btn_div}>
        <button className={css.btn} type="button">
          <Link to="/tweets" state={location} className={css.link}>
            To Tweets
          </Link>
        </button>
      </div>
    </div>
  );
};
