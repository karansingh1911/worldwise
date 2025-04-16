import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
      to="/"
    >
      <span>
        <img src="logo.png" className="h-[3.5rem] " alt="Worlwise-logo"></img>
      </span>
    </Link>
  );
}

export default Logo;
