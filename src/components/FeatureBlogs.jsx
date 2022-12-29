import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureBlogs = ({ blogs, title }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="blog-heading text-start pt-3 py-2 mb-4 font-bold w-full">
        {title}
      </div>
      {blogs?.map((item) => (
        <div className="px-4">
          <div
            className="flex flex-row gap-2 pb-3 text-black"
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            <div className="col-5 align-self-center">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="most-popular-img"
              />
            </div>
            <div className="col-7 padding">
              <div className="uppercase text-start most-popular-font">
                {item.title}
              </div>
              <div className="text-white text-start most-popular-font-meta">
                {item.timestamp.toDate().toDateString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlogs;
