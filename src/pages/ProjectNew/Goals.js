import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function PaymentForm({ form, setForm }) {
  const onChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Objetivos do projeto
      </Typography>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            focused
            id="goals"
            label="Objetivos"
            name="goals"
            onChange={({ target }) => onChange("goals", target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="intervation_area"
            label="Área de intervenção"
            name="intervation_area"
            onChange={({ target }) =>
              onChange("intervation_area", target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="target_audience"
            label="Público alvo"
            name="target_audience"
            onChange={({ target }) => onChange("target_audience", target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="required_course"
            label="Curso requerido"
            name="required_course"
            onChange={({ target }) => onChange("required_course", target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="observations"
            label="Observações"
            name="observations"
            onChange={({ target }) => onChange("observations", target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//             label="Remember credit card details for next time"
//           />
//         </Grid>
