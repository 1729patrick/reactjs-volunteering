import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


export default function Details({ form, setForm }) {

  const onChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalhes do Projeto
      </Typography>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Título do projeto"
          name="name"
          autoFocus
          onChange={({ target }) => onChange("name", target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="summary"
          label="Resumo do projeto"
          name="summary"
          onChange={({ target }) => onChange("summary", target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="entities"
          label="Empresas"
          name="entities"
          onChange={({ target }) => onChange("entities", target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="date"
          id="start_date"
          label="Data de inicio"
          name="start_date"
          defaultValue={form.start_date}
          onChange={({ target }) => onChange("start_date", target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          margin="normal"
          fullWidth
          id="end_date"
          label="Data final"
          format={"dd/mm/yyyy"}
          type="date"
          name="end_date"
          defaultValue={form.end_date}
          onChange={({ target }) => onChange("end_date", target.value)}
        />
      </Grid>
    </React.Fragment>
  );
}
