import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "Templates/Header/Header.js";
import Footer from "Templates/Footer.js";
import GridContainer from "Atoms/Grid/GridContainer.js";
import GridItem from "Atoms/Grid/GridItem.js";
import Button from "Atoms/CustomButtons/Button.js";
import Parallax from "Molecules/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "Templates/Header/HeaderLinks.js";
import Profile from "../Templates/Profile.js";
import SectionNavbars from "../Material_UI_Kit_Samples/Components/Sections/SectionNavbars.js";
import SectionTabs from "../Material_UI_Kit_Samples/Components/Sections/SectionTabs.js";
import SectionPills from "../Material_UI_Kit_Samples/Components/Sections/SectionPills.js";
import SectionNotifications from "../Material_UI_Kit_Samples/Components/Sections/SectionNotifications.js";
import SectionTypography from "../Material_UI_Kit_Samples/Components/Sections/SectionTypography.js";
import SectionJavascript from "../Material_UI_Kit_Samples/Components/Sections/SectionJavascript.js";
import SectionCarousel from "../Organisms/BJCarousel.js";
import SectionCompletedExamples from "../Material_UI_Kit_Samples/Components/Sections/SectionCompletedExamples.js";
import SectionLogin from "../Material_UI_Kit_Samples/Components/Sections/SectionLogin.js";
import SectionExamples from "../Material_UI_Kit_Samples/Components/Sections/SectionExamples.js";
import SectionDownload from "../Material_UI_Kit_Samples/Components/Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Homepage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/PersonalSiteHeader.JPG")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand} style={{float: "right"}}>
                <h1 className={classes.title}>Brad Jaffke</h1>
                <h3 className={classes.subtitle}>
                  Software Engineer.  Outdoorsman.  SAR team member.  Wilderness EMT.  Dad.  Husband.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Profile />
      </div>
      <Footer />
    </div>
  );
}
