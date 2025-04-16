import PropTypes from "prop-types";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Loader from "./Loader";
import Message from "./Message";
import { useCities } from "../hooks/useCities";
function CountryList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((accumulator_array, currentCity) => {
    // if empty accumulator array doesn't contain currentCity ka country spread the object with currentCity ke country and emoji inside countries array!
    if (
      !accumulator_array
        .map((eachCity) => eachCity.country)
        .includes(currentCity.country)
    ) {
      return [
        ...accumulator_array,
        { country: currentCity.country, emoji: currentCity.emoji },
      ];
    } else {
      return accumulator_array;
    }
  }, []);

  if (isLoading) return <Loader />;
  if (!cities.length) return <Message />;

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CountryList;
