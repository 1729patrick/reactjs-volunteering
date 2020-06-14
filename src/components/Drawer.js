import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { CardMedia, Typography } from "@material-ui/core";
import { format } from "date-fns";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  media: {
    height: 250,
    width: "100%",
  },
});

export default function TemporaryDrawer({ projects, leaveProject }) {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [project, setProject] = useState({});

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const mountProject = () => {
    return (
      <div
        className={clsx(classes.list)}
        role="presentation"
        // onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/paella.jpg"
          title={project.name}
        />
        <div style={{ padding: 10, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" component="h4">
            {project.name}
          </Typography>
          <Typography
            variant="subtitle2"
            component="subtitle2"
            style={{ margin: "15px 0", color: "#444" }}
          >
            {project.summary}
          </Typography>

          <Typography variant="subtitle2" component="subtitle2">
            Objetivos:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {project.goals}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Curso requirido:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {project.required_course}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Área de intervenção:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {project.intervation_area}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Público alvo:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {project.target_audience}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Observações:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {project.observations}
            </Typography>
          </Typography>
          {project.start && (
            <Typography variant="subtitle2" component="subtitle2">
              Data de ínicio:
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{ marginLeft: 5 }}
              >
                {format(new Date(project.start), "dd/MM/yyyy")}
              </Typography>
            </Typography>
          )}
          {project.end && (
            <Typography variant="subtitle2" component="subtitle2">
              Data Finall:
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{ marginLeft: 5 }}
              >
                {format(new Date(project.end), "dd/MM/yyyy")}
              </Typography>
            </Typography>
          )}
        </div>
        <div
          style={{
            width: "100%",
            marginTop: 50,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "80%" }}
            onClick={(e) => {
              leaveProject(project.id);
              toggleDrawer(false)(e);
            }}
          >
            Sair do projeto
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {projects.map((project) => (
        <ListItem
          button
          onClick={(e) => {
            toggleDrawer(true)(e);
            setProject(project);
          }}
          key={project.id}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={project.name} />
        </ListItem>
      ))}

      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {mountProject()}
      </Drawer>
    </div>
  );
}
