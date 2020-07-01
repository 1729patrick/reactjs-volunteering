import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

import api from "../../../../services/api";
import Actions from "../../../../components/Table/components/Actions";

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    display: "flex",
    "& .MuiTextField-root": {
      width: 450,
      margin: "8px 0",
    },
  },
  select: {
    margin: "8px 0",
  },
});

const Form = ({ onClose, confirmTitle, onSubmit, defaultValues, loading }) => {
  const classes = useStyles();
  const [is_admin, setIs_admin] = useState(defaultValues?.is_admin);
  const { errors, register, setValue, handleSubmit } = useForm({
    defaultValues,
  });

  useEffect(() => {
    register({ name: "is_admin" });
  }, [register, defaultValues]);

  console.log(defaultValues);

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        inputRef={register({ required: true })}
        error={!!errors.name}
        name="name"
        label="Name"
        variant="outlined"
      />
      <TextField
        inputRef={register({ required: true })}
        error={!!errors.email}
        name="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        inputRef={register({ required: true })}
        error={!!errors.phone}
        name="phone"
        label="Phone"
        variant="outlined"
      />
      <TextField
        inputRef={register({ required: true })}
        error={!!errors.city}
        name="city"
        label="City"
        variant="outlined"
      />
      <TextField
        inputRef={register({ required: true })}
        error={!!errors.password}
        name="password"
        label="Password"
        variant="outlined"
        type="password"
      />
      <FormControlLabel
        control={
          <Checkbox
            error={!!errors.is_admin}
            checked={is_admin}
            onChange={({ target }) => {
              setIs_admin(target.checked);
              setValue("is_admin", target.checked);
            }}
            name="is_admin"
            color="primary"
          />
        }
        label="Is Admin"
      />

      <Actions {...{ onClose, confirmTitle }} loading={loading} />
    </form>
  );
};

export default Form;
