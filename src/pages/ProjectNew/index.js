import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Review from "./Review";
import Details from "./Details";
import Goals from "./Goals";
import api from "../../services/api";
import { toastError } from "../../services/toast";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "auto",
    width: "100%",
  },
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Detalhes do projeto", "Objetivos do projeto", "Proposta"];

function getStepContent(step, { setForm, form }) {
  switch (step) {
    case 0:
      return <Details setForm={setForm} form={form} />;
    case 1:
      return <Goals setForm={setForm} form={form} />;
    case 2:
      return <Review form={form} />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [form, setForm] = useState({});

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      return onSubmit();
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = async () => {
    try {
      const response = (await api.post("/projects", {
        name: form.name,
        summary: form.summary,
        intervation_area: form.intervation_area,
        target_audience: form.target_audience,
        goals: form.goals,
        required_course: form.required_course,
        entities: form.entities,
        observations: form.observations,
        start: form.start_date,
        end: form.end_date
        }).data);

      setActiveStep(activeStep + 1);
    } catch (e) {
      toastError("Tente novamente em breve!");
    }
  };

  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Obrigado por submeter a sua proposta de projeto.
                </Typography>
                <Typography variant="subtitle1">
                  A sua proposta será avaliada brevemente. Aguarde pelo nosso contacto.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, { setForm, form })}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Propor projeto"
                      : "Próximo"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </div>
  );
}
