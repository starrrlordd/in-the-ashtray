import classes from "../../styles/ThreeDots.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const ThreeDots = () => {
    return <div>
        <div className={classes.threeDots}>
                <FontAwesomeIcon icon={faCircleDot} />
                <FontAwesomeIcon icon={faCircleDot} />
                <FontAwesomeIcon icon={faCircleDot} />
              </div>
    </div>
}

export default ThreeDots;