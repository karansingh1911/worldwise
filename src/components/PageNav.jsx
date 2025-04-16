import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap mt-4 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            className="mr-10 hover:text-gray-900 font-thin tracking-widest text-xl"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="mr-10 hover:text-gray-900 font-thin tracking-widest text-xl"
            to="/pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className="mr-10 hover:text-gray-900 font-thin tracking-widest text-xl  "
            to="/products"
          >
            Products
          </NavLink>
        </nav>
        <NavLink to="/login" className={styles.ctaLink}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-widest md:text-xl "
          >
            Login
          </button>
        </NavLink>
      </div>
    </header>
  );
}

export default PageNav;
