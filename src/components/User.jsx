import styles from "./User.module.css";
import { useAuthentication } from "../hooks/useAuthentication";

function User() {
  const { userDetails, logout } = useAuthentication();
  function handleClick(event) {
    event.preventDefault();
    logout();
  }

  return (
    <div className={styles.user}>
      <img src={userDetails.avatar} alt={userDetails.name} />
      <span>Welcome, {userDetails.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
