import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import { HiOutlineTrash } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
const BlogSection = ({
  id,
  title,
  description,
  category,
  imgUrl,
  userId,
  author,
  timestamp,
  user,
  handleDelete,
}) => {
  return (
    <div>
      <div className="row pb-4" key={id}>
        <div className="col-md-5">
          <div className="hover-blogs-img">
            <div className="blogs-img">
              <img src={imgUrl} alt={title} />
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="text-start">
            <h6 className="category catg-color">{category}</h6>
            <Link to={`/detail/${id}`}>
              <span className="title uppercase py-2">{title}</span>
            </Link>
            <span className="meta-info">
              <p className="author">{author}</p> -&nbsp;
              {timestamp.toDate().toDateString()}
            </span>
          </div>
          <div className="short-description text-start">
            {excerpt(description, 120)}
          </div>
          <Link to={`/detail/${id}`}>
            <button className="bg-gray-500 rounded-xl mt-2 text-gray-100 hover:bg-green-600 px-2 py-1">
              Chi Tiết
            </button>
          </Link>
          {user && user.uid === userId && (
            <div className="float-right flex flex-row gap-2 p-4 items-center">
              <HiOutlineTrash
                className="text-4xl pr-2 cursor-pointer hover:text-red-500"
                onClick={() => handleDelete(id)}
              />
              <Link to={`/update/${id}`}>
                <FiEdit className="text-2xl hover:text-green-500 cursor-pointer" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
