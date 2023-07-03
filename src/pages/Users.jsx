import React from "react";
import { Link } from "react-router-dom";
// import { Card } from "../components/card";
import { CardsList } from "../components/CardsList";

export const Users = () => {
  return (
    <div>
      <Link to={"/tweets"}>tweets</Link>
      <p>USERS</p>
      <CardsList />
    </div>
  );
};
