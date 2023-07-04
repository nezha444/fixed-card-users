import { Link } from "react-router-dom";
import css from "./Card.module.css";
import imgMass from "../../img/picture-mass.png";
import ellipse from "../../img/ellipse.png";
// import { useEffect } from "react";
// import logoOriginal from "../img/logoOriginal.svg";
import svgLogo from "./svg";
import Select from "react-select";

export const Card = ({ user, handleChangeFollower, followingUsers }) => {
  const isFollow = followingUsers.some((el) => el.user === user.user);

  return (
    <>
      <li className={css.cardUser}>
        {svgLogo}
        <img className={css.cardImg} src={imgMass} alt="img" />
        <div className={css.contForLinkLine}>
          <Link className={css.linkAvatar} to={`/users/${user.id}/tweets`}>
            <img className={css.avatar} src={user.avatar} alt="User avatar" />
          </Link>
          <div className={css.line}></div>
        </div>
        <p className={css.textTweets}>{user.tweets} tweets</p>
        <p className={css.textFollowers}>{user.followers} followers</p>

        <button
          className={`${isFollow ? css.follwing : css.follow} ${css.cardBtn}`}
          onClick={() => {
            handleChangeFollower(user.id, user.followers);
          }}
        >
          {isFollow ? "Following" : "Follow"}
        </button>
      </li>
    </>
  );
};
