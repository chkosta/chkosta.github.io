import React from "react";
import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <Typography variant="h1" textAlign="center">
        404
      </Typography>
      <Typography variant="h5" textAlign="center">
        This page could not be found.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
