import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import { format } from "date-fns";

import api from "../../services/api";
import { toastError, toastSuccess } from "../../services/toast";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "calc(33.3% - 15px)",
    marginBottom: 30,
    margin: "0 7.5px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    marginTop: 15,
    width: "100%",
  },
  itemProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
}));

export default function Project({
  id,
  name,
  summary,
  intervation_area,
  target_audience,
  observations,
  entities,
  owner_name,
  goals,
  required_course,
  end,
  setReload,
  start,
  showEnjoy = true,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onAddMember = async () => {
    try {
      await api.post("/projectmembers", {
        privacy: true,
        project_id: id,
      });

      setReload((reload) => reload + 1);
      toastSuccess(`Parabéns! Você está participando do projeto.`);
    } catch (e) {
      toastError("Tente novamente em breve!");
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img
            className={classes.itemProfile}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI1pRrpzGWWl2vZy5ceZAQ3o82d7zPnwyaAn_ph5gaIbQcciwf&usqp=CAU"
          ></img>
        }
        title={name}
        subheader={`Inscrições até ${format(new Date(end), "dd/MM/yyyy")}`}
      />
      <CardMedia
        className={classes.media}
        image="https://material-ui.com/static/images/cards/paella.jpg"
        title={name}
      />
      <CardContent>
        <Typography
          variant="h5"
          color="textPrimary"
          component="h5"
          style={{ fontSize: 17 }}
        >
          {summary}
        </Typography>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{ display: "flex", flexDirection: "column", paddingTop: 0 }}
        >
          <Typography variant="subtitle2" component="subtitle2">
            Objetivos:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {goals}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Curso requirido:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {required_course}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Área de intervenção:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {intervation_area}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Público alvo:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {target_audience}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="subtitle2">
            Observações:
            <Typography
              variant="subtitle1"
              component="subtitle1"
              style={{ marginLeft: 5 }}
            >
              {observations}
            </Typography>
          </Typography>
          {start && (
            <Typography variant="subtitle2" component="subtitle2">
              Data de ínicio:
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{ marginLeft: 5 }}
              >
                {format(new Date(start), "dd/MM/yyyy")}
              </Typography>
            </Typography>
          )}
          {end && (
            <Typography variant="subtitle2" component="subtitle2">
              Data Final:
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{ marginLeft: 5 }}
              >
                {format(new Date(end), "dd/MM/yyyy")}
              </Typography>
            </Typography>
          )}

          {showEnjoy && (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onAddMember}
            >
              Participar do projeto
            </Button>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
