import React, { useState } from "react";

const Pagination = ({
  items,
  itemsPerPage,
  setCurrentPagination,
  CurrentPagination,
}) => {
  const totalPages = Math.ceil(items?.length / itemsPerPage);

  // handle click event to change the current page
  const handleClick = (page) => {
    if (typeof setCurrentPagination === "function") {
      setCurrentPagination(page);
    }
  };

  // generate the page number buttons
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          className={CurrentPagination === i ? "active" : ""}
          key={i}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return <div className="pagination">{renderPageNumbers()}</div>;
};

export default Pagination;
