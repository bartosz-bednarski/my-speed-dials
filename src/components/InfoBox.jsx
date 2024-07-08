import classes from "./infoBox.module.scss";
import weather from "../assets/weather/cloudy_day.png";
const InfoBox = () => {
  return (
    <div className={classes["infoBox"]}>
      <h1>Hello Bartosz,</h1>
      <h2>Have a nice day</h2>
      <div className={classes["infoBox__weather-box"]}>
        {" "}
        <img src={weather} width={125} height={125} />
        <h2>Kraków</h2>
        <h2>25 °C</h2>
      </div>
    </div>
  );
};
export default InfoBox;
