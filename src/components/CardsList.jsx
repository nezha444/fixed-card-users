import React, { useEffect, useState } from "react";
import css from "./Card.module.css";
import { Card } from "./card";
import { BtnLoadMore } from "./BtnLoadMore";
import * as api from "../http/api";

export const CardsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [btnShown, setBtnShown] = useState(true);
  const [followingUsers, setFollowingUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );
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
  // console.log(users);
  useEffect(() => {
    loadMore();
  }, []);

  // Функция на подписку
  const handleChangeFollower = (id, followers) => {
    // Добавить в Api + 1 пользователя
    const hasDuplicates = (followingUsers, id) => {
      return followingUsers.some((el) => el.id === id);
    };
    if (hasDuplicates(followingUsers, id)) {
      console.log("User already exists in followingUsers array.");
      api.usersApiPutMinus(id, followers).then(() => {
        setUsers(
          users.map((el) => {
            if (el.id === id) {
              return { ...el, followers: followers - 1 };
            }
            return el;
          })
        );
        setFollowingUsers(followingUsers.filter((el) => el.id !== id));
      });
      localStorage.setItem("users", JSON.stringify(followingUsers));
    } else {
      console.log("User added to followingUsers array.");
      // Сохранить отдельно подписанных пользователей

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
        })
        .catch((e) => console.log(e));
      localStorage.setItem("users", JSON.stringify(followingUsers));
    }
  };

  // console.log(JSON.parse(localStorage.getItem("users")));
  return (
    <>
      <ul>
        {users.map((el) => (
          <Card
            handleChangeFollower={handleChangeFollower}
            key={el.id}
            el={el}
          />
        ))}
      </ul>
      <BtnLoadMore loadMore={loadMore} btnShown={btnShown} />
    </>
  );
};
