import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { currentPage, totalItemsCount, pageSize } = props;
  const numberOfTotalPages = Math.ceil(totalItemsCount / pageSize);
  if (numberOfTotalPages === 1) return null;
  const totalPages = _.range(1, numberOfTotalPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li class="page-item">
          <a
            class="page-link"
            onClick={() =>
              props.onPageChange(
                currentPage == 1 ? currentPage : currentPage - 1
              )
            }
          >
            {"<"}
          </a>
        </li>
        {totalPages.map((pageNumber) => (
          <li
            key={pageNumber}
            className={
              pageNumber == currentPage ? "page-item active" : "page-item"
            }
          >
            <a
              className="page-link"
              onClick={() => props.onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li class="page-item">
          <a
            class="page-link"
            onClick={() =>
              props.onPageChange(
                currentPage !== totalPages.length
                  ? currentPage + 1
                  : currentPage
              )
            }
          >
            {">"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
