import propTypes from "prop-types";
import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
  type: propTypes.string,
};

export default Button;
