import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "./Card";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    height: "100vh",
    padding: "0 20px",
  },
  cards: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "calc(100% - 39px)",
    paddingBottom: 25,
  },
  repprove: {
    marginLeft: 15,
  },
  buttons: {
    display: "flex",
    marginBottom: 15,
    justifyContent: "flex-end",
  },
}));

const Projects = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {}}
        >
          Aprovar
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.repprove}
          onClick={() => {}}
        >
          Recusar
        </Button>
      </div>
      <span className={classes.cards}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((card) => (
          <Card key={card} />
        ))}
      </span>
    </div>
  );
};

export default withRouter(Projects);
