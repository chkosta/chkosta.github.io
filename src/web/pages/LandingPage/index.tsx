import React from "react";
import { ILandingPageProps } from "./types";
import { Box, Typography, Avatar } from "@mui/material";

const LandingPage = (props: ILandingPageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 20,
      }}
    >
      <Avatar
        alt="Profile"
        src="images/profile.jpg"
        sx={{ width: 350, height: 350, mb: 2 }}
      />
      <Typography variant="h3" gutterBottom>
        Christos Costa
      </Typography>
      <Typography variant="h5">Full Stack Developer</Typography>
    </Box>
  );
};

export default LandingPage;
