import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-around h-10 ml-64 mb-0 mt-8  ">
        <div className="hidden lg:flex items-center space-x-4">
          <ul className="flex space-x-8 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 text-xl"
                  : "text-xl block py-2 px-3 md:p-0 text-gray-800 rounded md:bg-transparent"
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/clientes"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 text-xl"
                  : "text-xl block py-2 px-3 md:p-0 text-gray-800 rounded md:bg-transparent"
              }
            >
              Clientes
            </NavLink>

            <NavLink
              to="/best-clientes"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 text-xl"
                  : "text-xl block py-2 px-3 md:p-0 text-gray-800 rounded md:bg-transparent"
              }
            >
              Clientes Importantes
            </NavLink>

            <NavLink
              to="/ventas"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 text-xl"
                  : "text-xl block py-2 px-3 md:p-0 text-gray-800 rounded md:bg-transparent"
              }
            >
              Ventas
            </NavLink>

            <NavLink
              to="/estadisticas"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 text-xl "
                  : "text-xl block py-2 px-3 md:p-0 text-gray-800 rounded md:bg-transparent"
              }
            >
              Estadísticas
            </NavLink>
          </ul>
        </div>

        <div className="items-center hidden lg:flex space-x-4">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-blue-800 ml-4">
            <img
              src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
