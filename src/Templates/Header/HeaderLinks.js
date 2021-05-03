/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Book, Reorder} from "@material-ui/icons";

// core components
import CustomDropdown from "Atoms/CustomDropdown/CustomDropdown.js";
import Button from "Atoms/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
              href="www.google.com"
              color="transparent"
              target="_blank"
              variant="outlined"
              className={classes.navLink}
          >
              <Reorder className={classes.icons} /> Blog
          </Button>
        {/*<CustomDropdown*/}
        {/*  noLiPadding*/}
        {/*  buttonText="Blog"*/}
        {/*  buttonProps={{*/}
        {/*    className: classes.navLink,*/}
        {/*    color: "transparent"*/}
        {/*  }}*/}
        {/*  buttonIcon={Book}*/}
        {/*  dropdownList={[*/}
        {/*    <Link to="/" className={classes.dropdownLink}>*/}
        {/*      All components*/}
        {/*    </Link>,*/}
        {/*    <a*/}
        {/*      href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"*/}
        {/*      target="_blank"*/}
        {/*      className={classes.dropdownLink}*/}
        {/*    >*/}
        {/*      Documentation*/}
        {/*    </a>*/}
        {/*  ]}*/}
        {/*/>*/}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="www.google.com"
          color="transparent"
          target="_blank"
          variant="outlined"
          className={classes.navLink}
        >
          <Book className={classes.icons} /> Resume
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow me on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/BradJaffke"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="My Github Repo"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/BradJaffke/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
