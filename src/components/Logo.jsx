import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="hover:cursor-pointer ml-1 shadow-sm bg-blue text-white text-shadow-md rounded-md text-sm leading-3 font-extrabold w-min p-1 *:p-0 text-left">
      <Link to="/">
        <p>HR</p>
        <p>JOBS</p>
      </Link>
    </div>
  );
};
