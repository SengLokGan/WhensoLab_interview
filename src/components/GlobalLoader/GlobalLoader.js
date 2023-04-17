import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const GlobalLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: 1,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
      }}>
      <CircularProgress size="4rem" />
    </Box>
  );
};
