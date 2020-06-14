import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "./Card";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { toastError } from "../../services/toast";
import api from "../../services/api";
import { useAux } from "../../context/AuxContext";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    height: "100vh",
    padding: "0 20px",
    width: "100%",
  },
  cards: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
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
  const [projects, setProjects] = useState([]);
  const { reload, setReload } = useAux();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (await api.get("/projects/open")).data;

        setProjects(response?.projects || []);
      } catch (e) {
        toastError("Tente novamente em breve!");
      }
    };

    fetch();
  }, [reload]);

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
        {projects.map((project) => (
          <Card key={project.id} {...project} {...{ setReload }} />
        ))}
      </span>
    </div>
  );
};

export default withRouter(Projects);
