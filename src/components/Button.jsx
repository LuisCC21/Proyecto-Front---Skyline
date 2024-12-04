import { Link } from "react-router-dom";

export const Button = ({ name, route }) => {
  return (
    <>
      <Link
        to={route}
        className="z-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#b8fdc9_0%,#7ae083_50%,#277c1f_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-700 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          {name}
        </span>
      </Link>
    </>
  );
};
