import React from "react";
import css from "./Card/Card.module.css";

export const BtnLoadMore = ({ btnShown, loadMore }) => {
  return (
    <div className={css.contloadMoreBtn}>
      {btnShown ? (
        <button className={css.loadMoreBtn} onClick={loadMore}>
          Load More
        </button>
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};
