import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";

function SectionPills({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${
            classes.textCenter
            }`}
        >
          <h2 className={classes.titleSpecial}>We Offer Gift Card</h2>
          <h2 className={classes.titleSpecial}>Please visit our salon to get your gift card!</h2>


        </GridItem>

        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${
            classes.textCenter
            }`}
        >
          <Button
            round
            color="success"
            size="sm"
            href="tel:3213104761"
            rel="noopener noreferrer"
            className={classes.pullRight}
          >
            <i className="fas fa-phone fa-rotate-90" />CAll US
                </Button>
          <Button
            round
            color="success"
            size="sm"
            href="https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.pullRight}

          >
            <i className="fas fa-directions" />Directions
                </Button>
        </GridItem>

      </GridContainer>
    </div>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
