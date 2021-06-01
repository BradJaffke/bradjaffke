import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "Templates/Header/Header.js";
import Footer from "Templates/Footer.js";
import GridContainer from "Atoms/Grid/GridContainer.js";
import GridItem from "Atoms/Grid/GridItem.js";
import Parallax from "Molecules/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "Templates/Header/HeaderLinks.js";
import Profile from "../Templates/Profile.js";

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
