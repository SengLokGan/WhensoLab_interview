import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

import { BasicTextField } from "../components";
import { useLoginError, useLoginLoading } from "../slices";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const LoginForm = ({ onSubmit }) => {
  const { control, handleSubmit, setError } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const loginError = useLoginError();
  const isLoading = useLoginLoading();

  useEffect(() => {
    if (loginError && loginError !== "Sorry, that password isnt right") {
      setError("email", { type: "custom", message: loginError });
    } else if (loginError === "Sorry, that password isnt right") {
      setError("password", { type: "custom", message: loginError });
    }
  }, [loginError, setError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BasicTextField name="email" label="Email" control={control} />
        </Grid>
        <Grid item xs={12}>
          <BasicTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            control={control}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Visibility style={{ color: "#F2E3DB" }} />
                  ) : (
                    <VisibilityOff style={{ color: "#F2E3DB" }} />
                  )}
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{ justifyContent: "flex-start", display: "flex" }}>
          <Button
            style={{ textTransform: "none", color: "#F2E3DB" }}
            type="submit">
            Login
            {isLoading && (
              <CircularProgress
                size="20px"
                color="inherit"
                sx={{ ml: 1 }}
                data-testid="progressbar"
              />
            )}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
