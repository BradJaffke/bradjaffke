import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BJCarousel from "Organisms/BJCarousel";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import HRTimage from "assets/img/HRT.jpg";
import EMRU from "assets/img/EMRU.jpg";
import Family from "assets/img/Family.jpg";

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
            <p>
                Below you will find a little info about me.  If you would like to work with me, are more interested
                in my experience, or would like to work with me please check out my resume.  I will also be starting
                a blog.  I plan on writing about both software engineering and wilderness medicine.  Take a look
                if this is something that piques your interest.
            </p>
            <div className={classes.space30} />
            <h5>Software Engineering</h5>
            <p>Welcome!  My  name is Brad Jaffke.  I am a software engineer living in the beautiful Pacific Northwest.
            I have been living here for nearly a decade working at Liberty Mutual Insurance.  I have specialized in
            backend development for most of my career, but recently have started to experiment and gain some experience
            in the frontend.</p>
            <p>At work I lead three teams in the auto telematics space.  We write applications that support insurance
                products that give customers a discount based on their driving behavior.  Our applications are written
                on modern Cloud-Native architecture and use technologies such as Java, Spring Boot, React/Redux, GraphQL,
                Kafka, and a host of AWS managed services (Lambdas, S3 buckets, API gateways, etc.).
            </p>
            <p>
                I have experience in all aspects of the Software Development Lifecycle.  I am a supportive and
                enthusiastic team player and have been leading these three teams for the last few years. I am a
                self-motivated engineer and constantly striving to deliver quality products and services while
                harnessing new technologies. I am a huge proponent of Domain-Driven Design and Evolutionary Architecture.
            </p>
            <div className={classes.space30} />
            <h5>Search and Rescue/Wilderness EMT</h5>
            <p>
                One of my biggest passions is getting outside and enjoying everything the outdoors has to offer.  On
                weekends you will often find me hiking, backpacking, skiing, snowboarding, climbing, or biking.  Another
                passion of mine is helping people.  I combine those two passions by volunteering in Search and Rescue.
                I am a field member of Everett Mountain Rescue and a Rescue Technician + EMT on the Snohomish County
                Helicopter Rescue team.  I am constantly training with both of these groups.  We are on call 24/7/365
                to the residents of Snohomish County and respond when folks need help.
            </p>
            <div className={classes.space30} />
            <h5>Family</h5>
            <p>
                Finally, I am a husband to a wonderful lady (Brittany), and a father to an infant (Maya) & a 6-year old
                labrador (Shuksan).  They are my world, and I'd do anything for them.
            </p>
            <BJCarousel image1={HRTimage} image2={EMRU} image3={Family} />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
