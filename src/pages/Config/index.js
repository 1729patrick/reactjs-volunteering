import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import { toastError } from "../../services/toast";
import { useUser } from "../../context/UserContext";
import api from "../../services/api";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "auto",
    marginBottom: "auto",
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signup: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}));

export default withRouter(function SignUp({ history }) {
  const classes = useStyles();
  const { user, onSetUser } = useUser();
  const [form, setForm] = useState({
    firstName: user?.user?.name.split(" ")[0],
    lastName: user?.user?.name.split(" ")[1],
    email: user?.user?.email,
  });

  const onChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const { firstName, lastName, password, email } = form;

      if (!firstName || !lastName || !password || !email) {
        toastError("Preencha todos os campos!");
        return;
      }

      const response = (
        await api.put("/users", {
          name: `${firstName} ${lastName}`,
          password,
          email,
        })
      ).data;

      onSetUser(response);
    } catch (e) {
      toastError("Tente novamente em breve!");
    }
  };

  return (
    <div className={classes.signup}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  value={form.firstName}
                  label="Nome"
                  autoFocus
                  onChange={({ target }) => onChange("firstName", target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  value={form.lastName}
                  name="lastName"
                  autoComplete="lname"
                  onChange={({ target }) => onChange("lastName", target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={form.email}
                  autoComplete="email"
                  onChange={({ target }) => onChange("email", target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={({ target }) => onChange("password", target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Atualizar
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
});
