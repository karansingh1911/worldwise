import Loader from "./Loader";
import styles from "./FullPageSpinner.module.css";

function FullPageSpinner() {
  return (
    <div className={styles.fullPageSpinner}>
      <Loader />
    </div>
  );
}

export default FullPageSpinner;
