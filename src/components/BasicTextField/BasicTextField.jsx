import React from "react";
import { Controller } from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F2E3DB"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F2E3DB"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F2E3DB"
    }
  }
});

export const BasicTextField = ({
  name,
  label,
  control,
  rules = {},
  ...props
}) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          margin="normal"
          value={field.value || ""}
          onChange={field.onChange}
          onBlur={field.onBlur}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : null}
          inputProps={{
            style: {
              background: "transparent",
              color: "#F2E3DB",
            },
            autoComplete: "new-password",
          }}
          InputLabelProps={{
            style: { color: "#F2E3DB" },
          }}
          classes={classes}
          {...props}
        />
      )}
    />
  );
};
