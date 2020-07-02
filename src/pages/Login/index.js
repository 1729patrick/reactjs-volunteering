import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import api from "../../services/api";
import { toastError } from "../../services/toast";
import { useUser } from "../../context/UserContext";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Card from "../Projects/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  projects: {
    padding: 20,
  },
  login: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
  },
  cards: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
    height: "calc(100% - 39px)",
    padding: 20,
  },
}));

export default withRouter(function SignInSide({ history }) {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const { onSetUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openSignUp = (event) => {
    event.preventDefault();
    history.push("/signup");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = (await api.post("/sessions", { email, password })).data;
      onSetUser(response);
      history.push("/");
    } catch (e) {
      toastError("Credênciais inválidas!");
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (await api.get("public/projects/all")).data;

        setProjects(response?.projects || []);
      } catch (e) {
        toastError("Tente novamente em breve!");
      }
    };

    fetch();
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        <Typography component="h1" variant="h5" className={classes.projects}>
          Projetos disponíveis
        </Typography>
        <div className={classes.cards}>
          {projects.map((project) => (
            <Card
              key={project.id}
              {...project}
              showEnjoy={false}
              minWidth="calc(50% - 15px)"
            />
          ))}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.login}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Acesse sua conta
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={({ target }) => setEmail(target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Acessar
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Esqueci minha senha
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" onClick={openSignUp}>
                  {"Quero ser Voluntário"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
});
