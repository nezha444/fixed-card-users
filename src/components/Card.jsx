import { Link } from "react-router-dom";
import css from "./Card.module.css";
import { useState } from "react";

export const Card = ({ el, handleChangeFollower }) => {
  // console.log(JSON.parse(localStorage.getItem("users")));
  return (
    <li>
      <Link to={`/tweets/${el.id}`}>
        <img src={el.avatar} alt="User avetar" />
      </Link>
      <p>{el.tweets} tweets</p>
      <p>{el.followers} followers</p>
      <button
        onClick={() => {
          handleChangeFollower(el.id, el.followers);
        }}
      >
        Follow
      </button>
      {/* {(<button
        onClick={() => {
          handleChangeFollower(el.id, el.followers);
        }}
      >
        Follow
      </button>)(<button>Following</button>)} */}
    </li>
  );
};
