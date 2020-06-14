import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import api from "../../services/api";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    padding: "0 50px",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    flexDirection: "column",
    flex: 1,
    overflowY: "auto",
    height: "100vh",
  },
  podium: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  first: {
    margin: "0 50px",
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  podiumUser: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  itemProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
}));

export default function InteractiveList() {
  const classes = useStyles();
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (await api.get("/ranking")).data;

        setRanking(response?.projects || []);
      } catch (e) {
        setRanking("Tente novamente em breve!");
      }
    };

    fetch();
  }, []);

  if (!ranking.length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.podium}>
        <div className={classes.podiumUser}>
          <img
            className={classes.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
          ></img>
          <ListItemText
            primary={ranking[1]?.name}
            secondary={`Participante desde ${format(
              new Date(ranking[1]?.created_at),
              "dd/MM/yyyy"
            )}`}
          />
          {+ranking[1].count > 1
            ? `${ranking[1].count} projetos`
            : `${ranking[1].count} projeto`}
        </div>

        <div className={classes.podiumUser}>
          <img
            className={classes.first}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
          ></img>
          <ListItemText
            primary={ranking[0]?.name}
            secondary={`Participante desde ${format(
              new Date(ranking[0]?.created_at),
              "dd/MM/yyyy"
            )}`}
          />

          {+ranking[0].count > 1
            ? `${ranking[0].count} projetos`
            : `${ranking[0].count} projeto`}
        </div>

        <div className={classes.podiumUser}>
          <img
            className={classes.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
          ></img>
          <ListItemText
            primary={ranking[2]?.name}
            secondary={`Participante desde ${format(
              new Date(ranking[2]?.created_at),
              "dd/MM/yyyy"
            )}`}
          />

          {+ranking[2].count > 1
            ? `${ranking[2].count} projetos`
            : `${ranking[2].count} projeto`}
        </div>
      </div>
      <div className={classes.demo}>
        <List>
          {ranking
            .filter((_, i) => i >= 3)
            .map((user) => (
              <ListItem key={user.id}>
                <ListItemAvatar>
                  <img
                    className={classes.itemProfile}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
                  ></img>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={`Participante desde ${format(
                    new Date(user.created_at),
                    "dd/MM/yyyy"
                  )}`}
                />
                <ListItemSecondaryAction>
                  <Typography variant="h6" className={classes.title}>
                    {+user.count > 1
                      ? `${user.count} projetos`
                      : `${user.count} projeto`}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
      </div>
    </div>
  );
}
