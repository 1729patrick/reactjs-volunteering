import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "./Card";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { toastError, toastSuccess } from "../../services/toast";
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
    height: "100%",
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
  const classes = useStyles();

  const { reload, setReload } = useAux();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (await api.get("/projects/all")).data;

        setProjects(response?.projects || []);
      } catch (e) {
        toastError("Tente novamente em breve!");
      }
    };

    fetch();
  }, [reload]);

  const setApproved = async (is_approved, project) => {
    try {
      await api.put(`/projects/${project.id}`, {
        is_approved,
      });

      toastSuccess(
        `Projeto ${is_approved ? "aprovador" : "recusado"} com sucesso.`
      );
      setReload(reload + 1);
    } catch (e) {
      toastError("Tente novamente em breve!");
    }
  };
  return (
    <div className={classes.container}>
      <span className={classes.cards}>
        {projects.map((project) => (
          <Card
            key={project.id}
            {...project}
            {...{
              setReload,
              setApproved: (is_aproved) => setApproved(is_aproved, project),
            }}
          />
        ))}
      </span>
    </div>
  );
};

export default withRouter(Projects);
