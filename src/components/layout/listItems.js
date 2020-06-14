import React, { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import ExploreIcon from "@material-ui/icons/Explore";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import { withRouter } from "react-router-dom";
import { useAux } from "../../context/AuxContext";
import api from "../../services/api";
import { toastError } from "../../services/toast";

import Drawer from "../Drawer";

export const MainListItems = withRouter(({ history }) => {
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          history.push("/");
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push("/projects");
        }}
      >
        <ListItemIcon>
          <ExploreIcon />
        </ListItemIcon>
        <ListItemText primary="Projetos" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push("/rank");
        }}
      >
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="Ranking" />
      </ListItem>
    </div>
  );
});

export const SecondaryListItems = withRouter(({ history }) => {
  const { reload } = useAux();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (await api.get("/projects/my")).data;

        setProjects(response?.projects || []);
      } catch (e) {
        toastError("Tente novamente em breve!");
      }
    };

    fetch();
  }, [reload]);

  if (!projects.length) {
    return null;
  }

  return (
    <div>
      <ListSubheader inset>Meus Projetos</ListSubheader>
      <Drawer projects={projects} />
    </div>
  );
});


export const ConfigListItems = withRouter(({ history }) => {
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          history.push("/config");
        }}
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Definições" />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          history.push("/logout");
        }}
      >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
});