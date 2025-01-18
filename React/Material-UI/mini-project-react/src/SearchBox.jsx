import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "aaaae3fb21b028a618c45c113521db3e";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await response.json();

      let result = {
        city: city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        pressure: jsonRes.main.pressure,
        weather: jsonRes.weather[0].main,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  let handelChange = (event) => {
    setCity(event.target.value);
  };

  let handelSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className="SearchBox" onSubmit={handelSubmit}>
      <form action="#">
        <TextField
          id="city"
          label="Enter City"
          variant="outlined"
          required
          value={city}
          onChange={handelChange}
        />
        <Button variant="contained" type="submit" size="large">
          <TravelExploreIcon />
        </Button>
      </form>
      {error && (
        <div className="error">
          <Alert severity="error">No such place found</Alert>
        </div>
      )}
    </section>
  );
}
