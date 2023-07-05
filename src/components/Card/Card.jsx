import { Link } from "react-router-dom";
import css from "./Card.module.css";
import imgMass from "../../img/picture-mass.png";
import svgLogo from "./svg";

export const Card = ({ user, handleChangeFollower, followingUsers }) => {
  const isFollow = followingUsers.some((el) => el.user === user.user);

  const formatTweets = user.tweets.toLocaleString("en-US");
  const formatFollowers = user.followers.toLocaleString("en-US");

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
        <p className={css.textTweets}>{formatTweets} tweets</p>
        <p className={css.textFollowers}>{formatFollowers} followers</p>

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
