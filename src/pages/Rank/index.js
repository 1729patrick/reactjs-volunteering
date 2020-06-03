import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";

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

function generate(element) {
  return [0, 1, 2, 3, 5, 52, 25, 14, 14, 52, 25, 14, 14].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.podium}>
        <div className={classes.podiumUser}>
          <img
            className={classes.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
          ></img>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </div>

        <div className={classes.podiumUser}>
          <img
            className={classes.first}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
          ></img>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </div>

        <div className={classes.podiumUser}>
          <img
            className={classes.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
          ></img>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </div>
      </div>
      <div className={classes.demo}>
        <List>
          {generate(
            <ListItem>
              <ListItemAvatar>
                <img
                  className={classes.itemProfile}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
                ></img>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={"Secondary text"}
              />
              <ListItemSecondaryAction>
                <Typography variant="h6" className={classes.title}>
                  150 pontos
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );
}
