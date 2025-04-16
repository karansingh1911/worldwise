import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Loader from "./Loader";
import Message from "./Message";
import { useCities } from "../hooks/useCities";
function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Loader />;
  if (!cities.length) return <Message />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
