import classes from "./iconsBox.module.scss";
import Icon from "../icon/Icon";
import { Icons } from "../../utils/icons";
const IconsBox = () => {
  return (
    <div className={classes["icons-box"]}>
      {Icons.map((icon) => (
        <Icon image={icon.icon} title={icon.title} url={icon.url} />
      ))}
    </div>
  );
};
export default IconsBox;
