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
  button: {
    marginLeft: "auto",
    display: "flex",
    marginBottom: 15,
  },
}));

const Projects = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => history.push("/projects/new")}
      >
        Propor novo projeto
      </Button>
      <span className={classes.cards}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((card) => (
          <Card key={card} />
        ))}
      </span>
    </div>
  );
};

export default withRouter(Projects);
