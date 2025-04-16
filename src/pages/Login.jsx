import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useAuthentication } from "../hooks/useAuthentication";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { isAuthenticated, login } = useAuthentication();

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated === true) {
        navigate("/app", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <>
      <PageNav />
      <main className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="text-black"
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="text-black"
            />
          </div>

          <div>
            <Button type="primary" onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
