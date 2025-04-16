import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className="footer">
        <p className="copyright">
          &copy;Copyright by Worldwise.inc {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
