import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.js";
const Search = ({ search, handleChange }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search?searchQuery=${search}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="border-b-2 border-b-gray-200 mb-2">
        <div className="bg-blue-500 text-gray-100 w-fit px-2 py-1 rounded-xl my-2 ">
          Tìm Kiếm
        </div>
      </div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="col-12 py-2">
          <input
            type="text"
            value={search.toLowerCase()}
            className="form-control search-input"
            placeholder="Tìm kiếm bài viết, công thức..."
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 px-3 py-2 rounded-xl ml-2 text-gray-100 hover:bg-green-600">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
