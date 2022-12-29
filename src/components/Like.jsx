import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";

const Like = ({ handleLike, likes, userId }) => {
  useEffect(() => {
    let tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    let tootipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const LikeStatus = () => {
    if (likes?.length > 0) {
      return likes.find((id) => id === userId) ? (
        <>
          <i className="bi bi-hand-thumbs-up-fill" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Thíchs"}
        </>
      ) : (
        <>
          <i className="bi bi-hand-thumbs-up bg-blue-600" />
          &nbsp;{likes.length}{" "}
          {likes.length === 1 ? "lượt thích" : "lượt thích"}
        </>
      );
    }
    return (
      <>
        <i className="bi bi-hand-thumbs-up text-black" />
        &nbsp;Like
      </>
    );
  };
  return (
    <>
      <span
        style={{ float: "right", cursor: "pointer", marginTop: "-7px" }}
        onClick={!userId ? null : handleLike}
      >
        {!userId ? (
          <button
            type="button"
            className="btn btn-primary bg-blue-600"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Đăng nhập để thích bài viết"
          >
            <LikeStatus />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary bg-blue-600"
            title="Thích bài viết"
          >
            <LikeStatus />
          </button>
        )}
      </span>
    </>
  );
};

export default Like;
