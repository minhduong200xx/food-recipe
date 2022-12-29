import React from "react";
import { Link } from "react-router-dom";

const Category = ({ catgBlogsCount }) => {
  return (
    <div className="widget">
      <div className="blog-heading text-start py-1 mb-2 bg-orange-400 rounded-xl px-2">
        Danh Mục
      </div>
      <div className=" py-1">
        <ul className="flex flex-col gap-2">
          {catgBlogsCount?.map((item, index) => (
            <li
              key={index}
              className="even:bg-slate-200 rounded-lg items-center odd:bg-orange-200 hover:bg-orange-500 px-3 py-2"
            >
              <Link
                className="text-black flex flex-row justify-between"
                to={`/category/${item.category}`}
              >
                {item.category}
                <span>({item.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
