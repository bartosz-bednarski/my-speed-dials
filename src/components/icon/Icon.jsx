import classes from "./icon.module.scss";
const Icon = ({ image, title, url }) => {
  const imageFile = require(`../../assets/icons/${image}.png`);
  return (
    <a href={url}>
      <div className={classes["icon"]}>
        <img src={imageFile} className={classes["icon__image"]} />
        <h3>{title}</h3>
      </div>
    </a>
  );
};
export default Icon;
