import React, { useEffect, useState } from "react";
import css from "./Card.module.css";
import { Card } from "./Card";
import { BtnLoadMore } from "../BtnLoadMore";
import * as api from "../../http/api";
import Select from "react-select";

export const CardsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [btnShown, setBtnShown] = useState(true);
  const [followingUsers, setFollowingUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );
  const [filterValue, setFilterValue] = useState("");

  localStorage.setItem("users", JSON.stringify(followingUsers));
  const loadMore = () => {
    api
      .usersApiGet(page + 1)
      .then((response) => {
        if (response.data.length < 1) setBtnShown(false);
        const newusers = response.data;
        setUsers([...users, ...newusers]);
      })
      .catch((error) => console.log(error))
      .finally(setPage(page + 1));
  };

  useEffect(() => {
    loadMore();
  }, []);

  const handleChangeFollower = (id, followers) => {
    const hasDuplicates = (followingUsers, id) => {
      return followingUsers.some((el) => el.id === id);
    };
    if (hasDuplicates(followingUsers, id)) {
      api
        .usersApiPutMinus(id, followers)
        .then(() => {
          setUsers(
            users.map((el) => {
              if (el.id === id) {
                return { ...el, followers: followers - 1 };
              }
              return el;
            })
          );
          setFollowingUsers(followingUsers.filter((el) => el.id !== id));
          localStorage.setItem("users", JSON.stringify(followingUsers));
        })
        .catch((e) => console.log(e));
    } else {
      api
        .usersApiPutPlus(id, followers)
        .then(() => {
          setUsers(
            users.map((el) => {
              if (el.id === id) {
                return { ...el, followers: followers + 1 };
              }
              return el;
            })
          );
          setFollowingUsers((prev) =>
            prev.concat(users.find((el) => el.id === id))
          );
          localStorage.setItem("users", JSON.stringify(followingUsers));
        })
        .catch((e) => console.log(e));
    }
  };

  const options = [
    { value: "all", label: "Show all" },
    { value: "follow", label: "Follow" },
    { value: "followings", label: "Followings" },
  ];

  const handleChangeSelect = (event) => {
    setFilterValue(event.value);
  };

  const getFilteredUsers = () => {
    if (filterValue === "follow") {
      return users.filter((el) =>
        followingUsers.find((user) => user.user === el.user) ? false : true
      );
    }
    if (filterValue === "followings") {
      return followingUsers;
    }
    return users;
  };

  return (
    <div className={css.contCardsListAndBtn}>
      <Select
        onChange={handleChangeSelect}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,

            width: "250px",
          }),
        }}
      />
      <ul className={css.cardsList}>
        {getFilteredUsers().map((el) => (
          <Card
            followingUsers={followingUsers}
            handleChangeFollower={handleChangeFollower}
            key={el.id}
            user={el}
          />
        ))}
      </ul>
      <BtnLoadMore loadMore={loadMore} btnShown={btnShown} />
    </div>
  );
};
