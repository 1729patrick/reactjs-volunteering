import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { toastError } from "../../services/toast";
import api from "../../services/api";
import { useAux } from "../../context/AuxContext";
import { useUser } from "../../context/UserContext";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const [projects, setProjects] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const { reload } = useAux();
  const { user } = useUser({});

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

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (await api.get("/projects/my")).data;

        setMyProjects(response?.projects || []);
      } catch (e) {
        toastError("Tente novamente em breve!");
      }
    };

    fetch();
  }, [reload]);

  const classes = useStyles();
  return (
    <React.Fragment>
      {user?.user?.is_admin ? (
        <Title>Projetos avaliados</Title>
      ) : (
        <Title>Meus projetos</Title>
      )}
      <Typography component="p" variant="h4">
        {user?.user?.is_admin
          ? projects.filter((project) => project.updated_at).length
          : myProjects.length}
      </Typography>

      <span
        style={{ marginTop: 15, paddingTop: 15, borderTop: "1px solid #ddd" }}
      >
        {user?.user?.is_admin ? (
          <Title>Aguardando validação</Title>
        ) : (
          <Title>Projetos disponíveis</Title>
        )}
      </span>
      <Typography component="p" variant="h4">
        {user?.user?.is_admin
          ? projects.filter((project) => !project.updated_at).length
          : projects.length}
      </Typography>
    </React.Fragment>
  );
}
