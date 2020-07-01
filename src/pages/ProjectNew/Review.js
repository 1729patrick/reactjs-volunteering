import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

// const products = [
//   { name: "Product 1", desc: "A nice thing", price: "$9.99" },
//   { name: "Product 2", desc: "Another thing", price: "$3.45" },
//   { name: "Product 3", desc: "Something else", price: "$6.51" },
//   { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
//   { name: "Shipping", desc: "", price: "Free" },
// ];
// const addresses = [
//   "1 Material-UI Drive",
//   "Reactville",
//   "Anytown",
//   "99999",
//   "USA",
// ];
// const payments = [
//   { name: "Card type", detail: "Visa" },
//   { name: "Card holder", detail: "Mr John Smith" },
//   { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
//   { name: "Expiry date", detail: "04/2024" },
// ];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({ form }) {
  console.log(form);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h5">Proposta de Projeto</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Título do Projeto</Typography>
          <Typography variant="body2">{form.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Resumo do Projeto</Typography>
          <Typography variant="body2">{form.summary}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Empresa</Typography>
          <Typography variant="body2">{form.entities}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Objetivos</Typography>
          <Typography variant="body2">{form.goals}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Data de Ínicio</Typography>
          <Typography variant="body2">{form.start_date}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Data Final</Typography>
          <Typography variant="body2">{form.end_date}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Área de Intervenção</Typography>
          <Typography variant="body2">{form.intervation_area}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Público-Alvo</Typography>
          <Typography variant="body2">{form.target_audience}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Curso Requirido</Typography>
          <Typography variant="body2">{form.required_course}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Observações</Typography>
          <Typography variant="body2">{form.observations}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>

    // <React.Fragment>
    //   <Typography variant="h6" gutterBottom>
    //     Proposta de Projeto
    //   </Typography>
    //     <List>

    //       <ListItem>
    //         <ListItemText primary="Título do Projeto" secondary={form.name}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Resumo do Projeto" secondary={form.summary}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Empresas" secondary={form.entities}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Objetivos" secondary={form.goals}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Área de Intervenção" secondary={form.intervation_area}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Curso Requirido" secondary={form.required_course}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Público-Alvo" secondary={form.target_audience}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Observações" secondary={form.observations}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Data de Ínicio" secondary={form.start_date}>
    //         </ListItemText>
    //       </ListItem>

    //       <ListItem>
    //         <ListItemText primary="Data Final" secondary={form.end_date}>
    //         </ListItemText>
    //       </ListItem>
    //     </List>
    // </React.Fragment>

    // <React.Fragment>
    //   <Typography variant="h6" gutterBottom>
    //     Proposta de Projeto
    //   </Typography>
    //   <List disablePadding>
    //     {products.map((product) => (
    //       <ListItem className={classes.listItem} key={product.name}>
    //         <ListItemText primary={form.goals} secondary={product.desc} />
    //         <Typography variant="body2">{product.price}</Typography>
    //       </ListItem>
    //     ))}
    //     <ListItem className={classes.listItem}>
    //       <ListItemText primary="Total" />
    //       <Typography variant="subtitle1" className={classes.total}>
    //         $34.06
    //       </Typography>
    //     </ListItem>
    //   </List>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <Typography variant="h6" gutterBottom className={classes.title}>
    //         Shipping
    //       </Typography>
    //       <Typography gutterBottom>John Smith</Typography>
    //       <Typography gutterBottom>{addresses.join(", ")}</Typography>
    //     </Grid>
    //     <Grid item container direction="column" xs={12} sm={6}>
    //       <Typography variant="h6" gutterBottom className={classes.title}>
    //         Payment details
    //       </Typography>
    //       <Grid container>
    //         {payments.map((payment) => (
    //           <React.Fragment key={payment.name}>
    //             <Grid item xs={6}>
    //               <Typography gutterBottom>{payment.name}</Typography>
    //             </Grid>
    //             <Grid item xs={6}>
    //               <Typography gutterBottom>{payment.detail}</Typography>
    //             </Grid>
    //           </React.Fragment>
    //         ))}
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </React.Fragment>
  );
}
