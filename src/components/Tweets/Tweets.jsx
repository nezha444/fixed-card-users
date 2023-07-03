import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as api from "../../http/api";
import css from "./Tweets.module.css";

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState([]);
  const { userId } = useParams();

  const getTweets = (id) => {
    api
      .userTweetsApiGet(id)
      .then((resp) => {
        setTweets(resp.data);
      })
      .catch((e) => console.log(e));
  };

  console.log(user);

  const getUser = (id) => {
    api
      .userApiGet(id)
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getUser(userId);
    getTweets(userId);
  }, []);

  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Link to={location.state ?? "/"}>Go back</Link>
      {/* <Link to={"/"}>users</Link> */}
      <ul className={css.postsList}>
        {tweets?.map((el) => (
          <li key={el.id} className={css.postItem}>
            <h3 className={css.userName}>{user.user}</h3>
            <span>{el.post}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
