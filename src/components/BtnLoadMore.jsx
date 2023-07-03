import React from "react";

export const BtnLoadMore = ({ btnShown, loadMore }) => {
  return (
    <>
      {btnShown ? (
        <button onClick={loadMore}>Load More</button>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};
