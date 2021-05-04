import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/components";

const useStyles = makeStyles(styles);

export default function Resume(props) {
    const classes = useStyles();

    return(
        <div className={classNames(classes.main, classes.mainRaised)}>
            <h1>Resume</h1>
                <h2>Summary</h2>
                    <p>Experienced software engineer with nearly a decade of industry experience in all aspects of the
                        software development life cycle. Supportive and enthusiastic team player who has been leading three
                        teams of engineers writing cloud-native backend services. Self-motivated engineer who is constantly
                        striving to deliver quality products and services while harnessing new technologies. Big proponent of
                        Domain-Driven Design and Evolutionary Architecture.</p>
                <h4>Liberty Mutual Insurance Group</h4>
                <h6>Seattle, WA</h6>
        </div>
    );
}
