import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { withRouter } from "react-router-dom";
import { toastError } from "../../services/toast";
import { useAux } from "../../context/AuxContext";
import api from "../../services/api";
import { format } from "date-fns";
import { useUser } from "../../context/UserContext";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default withRouter(function Orders({ history }) {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const { user } = useUser();
  const { reload } = useAux();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (await api.get("/projects/open")).data;

        setProjects(response?.projects || []);
      } catch (e) {
        toastError("Tente novamente em breve!");
      }
    };

    fetch();
  }, [reload]);

  const openProjects = (event) => {
    event.preventDefault();
    user?.user?.is_admin
      ? history.push("/projects/approve")
      : history.push("/projects");
  };

  return (
    <React.Fragment>
      <Title>Projetos disponíveis</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Data inicial</TableCell>
            <TableCell>Data final</TableCell>
            <TableCell>Curso requirido</TableCell>
            <TableCell>Público alvo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects
            .filter((_, i) => i < 5)
            .map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>
                  {format(new Date(project.start), "dd/MM/yyyy")}
                </TableCell>
                <TableCell>
                  {format(new Date(project.end), "dd/MM/yyyy")}
                </TableCell>
                <TableCell>{project.required_course}</TableCell>
                <TableCell>{project.target_audience}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/projects" onClick={openProjects}>
          Ver projetos
        </Link>
      </div>
    </React.Fragment>
  );
});
