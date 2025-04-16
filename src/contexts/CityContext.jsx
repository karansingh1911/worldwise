import { createContext, useCallback, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
const BaseURL = "http://localhost:8000";

const CityContext = createContext();

const initialState = {
  isLoading: false,
  cities: [],
  currentCity: {},
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "city/loaded": {
      return { ...state, currentCity: action.payload, isLoading: false };
    }
    case "cities/loaded": {
      return { ...state, isLoading: false, cities: action.payload };
    }
    case "cities/created": {
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload], //because action.payload is new city object that must be added in the array!
        currentCity: action.payload,
      };
    }
    case "cities/deleted": {
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(
          (everyCity) => everyCity.id !== action.payload
        ),
        currentCity: {},
      };
    }
    case "request/rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Something else has happened 😵");
  }
}

function CityProvider({ children }) {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, cities, currentCity, error } = state;

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const response = await fetch(`${BaseURL}/cities`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "request/rejected",
          payload: "Something happened when running useEffect first time",
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      // meaning if current city isnt changed dont fetch the api rather do nothing and hold that currentcity!
      //id comes from url and currentCity.id comes from context which changes when getCity is clicked!
      console.log(currentCity.id, id);
      if (Number(currentCity.id) === id) {
        return;
      }
      dispatch({ type: "loading" });
      try {
        const response = await fetch(`${BaseURL}/cities/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({ type: "city/loaded", payload: data });
        return data;
      } catch (error) {
        dispatch({
          type: "request/rejected",
          payload: "Error while getting city with specific id",
        });
      }
    },
    [currentCity.id]
  );
  async function createCity(newCityObject) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BaseURL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCityObject),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      dispatch({ type: "cities/created", payload: data });
      console.log("New city created: ", data);
    } catch (error) {
      dispatch({
        type: "request/rejected",
        payload: "Sorry, can't create city due to some issue!",
      });
    }
  }
  async function deleteCity(selectedCityId) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BaseURL}/cities/${selectedCityId}`, {
        method: "DELETE",
      });
      dispatch({ type: "cities/deleted", payload: selectedCityId });
    } catch (error) {
      dispatch({
        type: "request/rejected",
        payload: "Sorry, can't delete the city with that id!",
      });
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
CityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CityProvider;
export { CityContext };
