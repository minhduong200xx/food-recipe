import React from "react";
import { useNavigate } from "react-router-dom";

const CommentBox = ({ userId, userComment, setUserComment, handleComment }) => {
  const navigate = useNavigate();
  return (
    <>
      <form className="row blog-form">
        <div className="col-12 py-3">
          <textarea
            rows="4"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            className="form-control description"
          />
        </div>
      </form>
      {!userId ? (
        <>
          <h5 className="my-2">Vui lòng đăng nhập hoặc đăng ký để bình luận</h5>
          <button
            className="bg-green-600 px-2 py-1 rounded-2xl text-gray-100 hover:bg-red-600"
            onClick={() => navigate("/auth")}
          >
            Đăng nhập
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-green-600 px-2 py-1 rounded-2xl text-gray-100 hover:bg-blue-600"
            type="submit"
            onClick={handleComment}
          >
            Bình luận
          </button>
        </>
      )}
    </>
  );
};

export default CommentBox;
