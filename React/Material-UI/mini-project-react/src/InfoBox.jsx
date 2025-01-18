import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ weatherInfo }) {
  let imgUrl =
    "https://images.unsplash.com/photo-1651993568350-140289f22c6e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let Hot_Url =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Cold_Url =
    "https://images.unsplash.com/photo-1548184187-b0b21e7b5dce?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Rain_Url =
    "https://images.unsplash.com/photo-1636414795389-2cd7bb362560?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              weatherInfo.humidity > 80
                ? Rain_Url
                : weatherInfo.temp > 15
                ? Hot_Url
                : Cold_Url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}{" "}
              {weatherInfo.humidity > 80 ? (
                <ThunderstormIcon />
              ) : weatherInfo.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>
                <b>Temperature:</b> {weatherInfo.temp}&deg;C
              </p>
              <p>
                <span>
                  <b>Min temp: </b>
                  {weatherInfo.tempMin}
                  {", "}
                </span>
                <span>
                  <b>Max temp: </b>
                  {weatherInfo.tempMax}
                </span>
              </p>
              <p>
                <b>Humidity:</b> {weatherInfo.humidity}
              </p>
              <p>
                <b>Pressure:</b> {weatherInfo.pressure}
              </p>
              <p>
                <b>Weather:</b> {weatherInfo.weather}, feels like{" "}
                {weatherInfo.feelsLike}
                &deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
