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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";

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
}));

export default function Project({
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
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={name}
        subheader={`Incrições até ${end}`}
      />
      <CardMedia
        className={classes.media}
        image="https://material-ui.com/static/images/cards/paella.jpg"
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Objetivos:</b> {goals}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Curso requirido:</b> {required_course}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Área de intervenção:</b> {intervation_area}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Público alvo:</b> {target_audience}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Observações:</b> {observations}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {}}
          >
            Participar do projeto
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
