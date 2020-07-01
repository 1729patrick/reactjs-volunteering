import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    padding: "30px 20px",
  },
  title: {
    marginBottom: 20,
  },
});

export default function ({ open, onClose, title, loading, children: Form }) {
  const classes = useStyles();

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    onClose();
  };

  return (
    <Drawer anchor={"right"} open={open} onClose={toggleDrawer()}>
      {loading && <LinearProgress />}
      <div className={classes.container}>
        <Typography color="textPrimary" variant="h5" className={classes.title}>
          {title}
        </Typography>
        {Form}
      </div>
    </Drawer>
  );
}
