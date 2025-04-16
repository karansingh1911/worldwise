import { useContext, useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Message from "./Message";
import Loader from "./Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CityContext } from "../contexts/CityContext";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) - 65 + 0x1f1e6);
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();
  const [geoCodingError, setGeoCodingError] = useState(null);
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState();
  const { createCity } = useContext(CityContext);
  useEffect(
    function () {
      if (!lat && !lng) {
        return;
      }
      async function fetchCityDetails() {
        try {
          setIsLoadingGeoCoding(true);
          setGeoCodingError("");
          const response = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await response.json();
          console.log("geoCoding data is ", data);

          if (!data.countryCode) {
            throw new Error("Please select a valid location on the map! 😉");
          }

          setCityName(data.city || data.locality || "");
          setCountryName(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (error) {
          setGeoCodingError(error.message);
        } finally {
          setIsLoadingGeoCoding(false);
        }
      }
      fetchCityDetails();
    },
    [lat, lng]
  );
  async function handleSubmit(event) {
    event.preventDefault();

    if (!cityName || !date) return;

    const newCityObject = {
      cityName,
      country: countryName,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    console.log("newCityObject is: ", newCityObject);
    await createCity(newCityObject);
    navigate("/app/cities");
  }
  if (geoCodingError) return <Message message={geoCodingError} />;

  if (isLoadingGeoCoding) return <Loader />;

  if (!lat || !lng) {
    //if there is not lat and lng immed. return and don't fire API request.
    return <span>Start by adding some cities. 😉</span>;
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className="px-2 py-2"
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={"dd//MM/yyyy"}
          className="px-2 py-2"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className="py-2 px-2"
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate("/app/cities");
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
