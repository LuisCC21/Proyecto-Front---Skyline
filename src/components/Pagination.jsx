import React from "react";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 10;

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
      let startPage = currentPage - halfMaxPageNumbersToShow;
      let endPage = currentPage + halfMaxPageNumbersToShow;

      if (startPage < 1) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      } else if (endPage > totalPages) {
        startPage = totalPages - maxPageNumbersToShow + 1;
        endPage = totalPages;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        pageNumbers.unshift(-1);
      }

      if (endPage < totalPages) {
        pageNumbers.push(-1);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div className="hidden justify-between text-sm md:flex">
        <div>
          Mostrado {currentPage * 10 - 9}-
          {Math.min(currentPage * 10, totalPages * 10)} de {totalPages * 10}
        </div>
        <div className="flex items-center gap-12" aria-label="Pagination">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-white bg-blue-800 hover:bg-blue-900 px-2 py-1 rounded-lg"
          >
            Previous
          </button>
          <ul className="flex items-center gap-1">
            {getPageNumbers().map((item, idx) => (
              <li key={idx}>
                {item === -1 ? (
                  <span>...</span>
                ) : (
                  <button
                    onClick={() => onPageChange(item)}
                    aria-current={currentPage === item ? "page" : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-blue-800 ${
                      currentPage === item
                        ? "bg-blue-800 text-white font-medium"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-white bg-blue-800 hover:bg-blue-900 px-2 py-1 rounded-lg "
          >
            Next
          </button>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Previous
        </button>
        <div className="font-medium">
          Mostrado {currentPage * 10 - 9}-
          {Math.min(currentPage * 10, totalPages * 10)} de {totalPages * 10}
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
