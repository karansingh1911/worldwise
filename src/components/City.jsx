import styles from "./City.module.css";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { CityContext } from "../contexts/CityContext";
import { useContext, useEffect } from "react";
import Loader from "./Loader";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // TEMP DATA
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useContext(CityContext);

  useEffect(() => {
    async function fetchCity() {
      try {
        await getCity(id); // Assuming getCity is already an async function // id=id of cityItem
      } catch (error) {
        console.error("Error fetching city:", error);
      }
    }

    fetchCity();
  }, [id, getCity]);

  const navigate = useNavigate();
  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </div>
  );
}

export default City;
