import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import ExploreIcon from "@material-ui/icons/Explore";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import { withRouter } from "react-router-dom";

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
  return (
    <div>
      <ListSubheader inset>Meus Projetos</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Projeto Árrabida IV" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Liboa em Casa" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Praia mais limpa" />
      </ListItem>
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