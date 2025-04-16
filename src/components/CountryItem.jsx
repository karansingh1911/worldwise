import propTypes, { objectOf } from "prop-types";
import styles from "./CountryItem.module.css";
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
CountryItem.propTypes = {
  country: objectOf(propTypes.string),
};

export default CountryItem;
