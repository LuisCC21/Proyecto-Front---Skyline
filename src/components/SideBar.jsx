import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:opacity-0 sm:bg-white "
          onClick={toggleSidebar}
        />
      )}

      <div className="flex md:order-2 md:space-x-0 space-x-3 rtl:space-x-reverse absolute right-10 top-12">
        <button
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${
            isOpen ? "text-red-700" : "text-blue-700"
          } rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
          aria-controls="navbar-cta"
          aria-expanded="false"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3l8 8m0-8L3 11"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          )}
        </button>
      </div>
      <aside
        className={`absolute  sm:top-16 top-0 left-0 w-64 h-screen transition-transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto  bg-gradient-to-b from-blue-900 to-transparent rounded-tr-3xl ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg   group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 group-hover:text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 text-white hover:text-gray-200">
                  Inicio
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/clientes"
                className="flex items-center p-2 text-gray-900 rounded-lg  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-white hover:text-gray-200">
                  Clientes
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/best-clientes"
                className="flex items-center p-2 text-gray-900 rounded-lg  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="m2,2C2,.895,2.895,0,4,0s2,.895,2,2-.895,2-2,2-2-.895-2-2Zm10,7v-1.5c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v1.5h6Zm-3-4c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Zm5-1c1.105,0,2-.895,2-2S15.105,0,14,0s-2,.895-2,2,.895,2,2,2Zm-10,3.5c0-.98.407-1.864,1.058-2.5h-2.558c-.828,0-1.5.672-1.5,1.5v1.5h3v-.5Zm11.5-2.5h-2.558c.651.636,1.058,1.52,1.058,2.5v.5h3v-1.5c0-.828-.672-1.5-1.5-1.5Zm7.648,3.681c-.515-.469-1.186-.712-1.878-.678-.697.032-1.339.334-1.794.835l-3.541,3.737c.032.21.065.42.065.638,0,2.083-1.555,3.876-3.617,4.17l-4.241.606-.283-1.979,4.241-.606c1.084-.155,1.9-1.097,1.9-2.191,0-1.22-.993-2.213-2.213-2.213H3c-1.654,0-3,1.346-3,3v7c0,1.654,1.346,3,3,3h9.664l10.674-11.655c.948-1.062.862-2.707-.189-3.665Z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap text-white hover:text-gray-200">
                  Clientes Importantes
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/ventas"
                className="flex items-center p-2 text-gray-900 rounded-lg  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-white hover:text-gray-200">
                  Ventas
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/estadisticas"
                className="flex items-center p-2 text-gray-900 rounded-lg  group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bar-chart-2 flex-shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 "
                >
                  <rect x="2" y="2" width="6" height="20" fill="white" />
                  <rect x="10" y="5" width="6" height="17" fill="white" />
                  <rect x="18" y="10" width="6" height="12" fill="white" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap text-white hover:text-gray-200">
                  Estadisticas
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
