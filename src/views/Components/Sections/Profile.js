import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import HRTimage from "assets/img/HRT.jpg";

const useStyles = makeStyles(styles);

export default function Profile() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Bio</h2>
            <h5>Software Engineering</h5>
            <p>Welcome!  My  name is Brad Jaffke.  I am a software engineer living in the beautiful Pacific Northwest.
            I have been living here for nearly a decade working at Liberty Mutual Insurance.  I have specialized in
            backend development for most of my career, but recently have started to experiment and gain some experience
            in the frontend.</p>
            <p>At work I lead three teams in the auto telematics space.  We write applications that support insurance
                products that give customers a discount based on their driving behavior.  Our applications are written
                on modern Cloud-Native architecture.
            </p>
            <p>
                I have experience in all aspects of the Software Development Lifecycle.  I am a supportive and
                enthusiastic team player and have been leading these three teams for the last few years. I am a
                self-motivated engineer and constantly striving to deliver quality products and services while
                harnessing new technologies. I am a huge proponent of Domain-Driven Design and Evolutionary Architecture.
            </p>
            <div className={classes.space50} />
            <h5>Search and Rescue/Wilderness EMT</h5>
            <p>
                One of my biggest passions is getting outside and enjoying everything the outdoors has to offer.  On
                weekends you will often find me hiking, backpacking, skiing, snowboarding, climbing, or biking.  Another
                passion of mine is helping people.  I combine those two passions by volunteering in Search and Rescue.
                I am a field member of Everett Mountain Rescue and a Rescue Technician + EMT on the Snohomish County
                Helicopter Rescue team.  I am constantly training with both of these groups.  We are on call 24/7/365
                to the residents of Snohomish County and respond when folks need help.
            </p>
            <GridContainer>
                <GridItem xs={12} sm={2}>
                    <img
                        src={HRTimage}
                        alt="Brad in his HRT uniform during a training day"
                        className={classes.imgRounded + " " + classes.imgFluid} />
                </GridItem>
            </GridContainer>
        </div>
        <div className={classes.space70} />
        <div className={classes.space70} />
      </div>
    </div>
  );
}
