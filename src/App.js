import classes from "./app.module.scss";
import IconsBox from "./components/iconsBox/IconsBox";
import InfoBox from "./components/InfoBox";
function App() {
  return (
    <div className={classes["app"]}>
      {/* <InfoBox /> */}
      <IconsBox />
    </div>
  );
}

export default App;
