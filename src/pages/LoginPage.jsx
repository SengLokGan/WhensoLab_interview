import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

import { useAuth } from "../utils";
import { LoginForm } from "../forms";
import { useLoginStatus } from "../slices";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
    maxWidth: 400,
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
}));

export const LoginPage = () => {
  const classes = useStyles();
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const userStatus = useLoginStatus();
  const authToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (authToken) {
      navigate("/success");
    }
  }, [authToken, userStatus, navigate]);

  const onSubmit = (data) => {
    handleLogin(data.email, data.password);
  };

  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h5"
        component="h1"
        style={{ color: "#F2E3DB" }}
        className={classes.title}>
        Login
      </Typography>
      <LoginForm onSubmit={onSubmit} />
    </Paper>
  );
};
