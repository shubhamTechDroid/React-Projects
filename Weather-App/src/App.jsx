import { useState } from "react";
import "./App.css";
import useFetch from "./components/useFetch";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const apikey = import.meta.env.VITE_API_KEY;
  const [url, setUrl] = useState(null);

  const kelvinToCelsius = (k) => {
    return k - 273.15;
  };

  const handleGetData = () => {
    if (city && country) {
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}`
      );
    }
  };

  const { data, loading, error } = useFetch(url);

  return (
    <div className="container main">
      <h1 className="text-center mt-4 text-dark">Weather Deatils</h1>

      <div className="container w-50">
        <input
          type="text"
          className=" form-control mt-4"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          type="text"
          className=" form-control mt-4"
          placeholder="Country Code"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div>

      <div className="container d-flex justify-content-center align-items-center mt-4">
        <button className="btn btn-dark" onClick={handleGetData}>
          Get Weather
        </button>
      </div>

      <div className="container mt-3">
        {loading && <h2 className="text-center">Loading...</h2>}
        {error && <h3 className="text-center">Error Fetching Data</h3>}
        {!error && data && (
          <div className="d-flex databox flex-column">
            <div  className=" d-flex ">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />
              <p>
                Description <br />
                {data.weather[0].main}
              </p>
              <p>
                Feels Like <br />{" "}
                {kelvinToCelsius(data.main.feels_like).toFixed(2)}
              </p>
              <p>
                Temprature
                <br />
                {kelvinToCelsius(data.main.temp).toFixed(2)}
              </p>
            </div>

            <div  className=" d-flex mt-5">
              <p>
                Min Temp
                <br />
                {kelvinToCelsius(data.main.temp_min).toFixed(2)}
              </p>
              <p>
                Max Temp
                <br />
                {kelvinToCelsius(data.main.temp_max).toFixed(2)}
              </p>
              <p>
                Humidity
                <br />
                {data.main.humidity}
              </p>
              <p>
                Pressure
                <br />
                {data.main.pressure}pa
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
