import React from "react";

import { Button } from "@material-ui/core";

import { useAuth } from "../utils";

export const SuccessPage = () => {
  const { handleLogout } = useAuth();

  return (
    <div>
      <h1 style={{ color: "#F2E3DB" }}>Welcome to the home page</h1>
      <Button
        onClick={() => handleLogout()}
        style={{
          textTransform: "none",
          color: "#F2E3DB",
          animation: "blink 1s linear infinite",
        }}>
        Logout
      </Button>
    </div>
  );
};
