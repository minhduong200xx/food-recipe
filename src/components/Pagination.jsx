import React from "react";

const Pagination = ({ currentPage, handlePageChange, noOfPages }) => {
  return (
    <div>
      <div className="row mx-0">
        <div className="col-12 text-center pb-4 pt-4 flex flex-row gap-3 items-center justify-center">
          <button
            className="bg-blue-500 px-2 py-1 text-gray-100 rounded-lg cursor-pointer hover:bg-red-500"
            disabled={currentPage === 1}
            onClick={() => handlePageChange("Prev")}
          >
            <i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp;Trước
          </button>
          <span className="bg-slate-300 py-1 px-3 text-black font-semibold rounded-lg cursor-pointer">
            {currentPage}
          </span>
          <button
            className="bg-blue-500 px-2 py-1 text-gray-100 rounded-lg cursor-pointer hover:bg-red-500"
            disabled={currentPage === noOfPages}
            onClick={() => handlePageChange("Next")}
          >
            Sau <i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
