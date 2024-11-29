import { useState, useEffect } from "react";
import { Pagination } from "./Pagination";

export const TableClientes = ({
  tableItems = [],
  columnsName = [],
  pagination = false,
  title = ''
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [objectsPerPage] = useState(10);
  const [currentObjects, setCurrentObjects] = useState([]);

  useEffect(() => {
    const indexOfLastObject = currentPage * objectsPerPage;
    const indexOfFirstObject = indexOfLastObject - objectsPerPage;
    setCurrentObjects(tableItems.slice(indexOfFirstObject, indexOfLastObject));
  }, [currentPage, tableItems, objectsPerPage]);

  const totalPages = Math.ceil(tableItems.length / objectsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          {title}
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto scrollbar ">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              {columnsName.map((name, i) => (
                <th className="py-3 px-6" key={i}>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {currentObjects.map((items, i) => {
              const array = Object.values(items);
              return (
                <tr key={i}>
                  {array.map((values, i) => {
                    if (i == 0) return;
                    return (
                      <td className="px-6 py-4 whitespace-nowrap" key={values}>
                        {values}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {pagination && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageClick}
        />
      )}
    </div>
  );
};
