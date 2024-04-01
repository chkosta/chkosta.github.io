import React from "react";
import { Container, Typography, Grid, Avatar, Box } from "@mui/material";
import { PrimaryButton } from "../../components/shared/StyledButtons";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Profile"
            src="images/profile.jpg"
            sx={{
              width: "40%",
              height: "auto",
              margin: "2%",
            }}
          />
        </Box>

        <Typography variant="h3" gutterBottom>
          Christos Costa
        </Typography>
        <Typography variant="h5" gutterBottom>
          Full Stack Developer
        </Typography>

        <Grid container justifyContent="space-between" marginTop="8%">
          <Grid item>
            <Link to="/about">
              <PrimaryButton sx={{ width: "200px" }}>
                <Typography variant="h6">About</Typography>
              </PrimaryButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/experience">
              <PrimaryButton sx={{ width: "200px" }}>
                <Typography variant="h6">Experience</Typography>
              </PrimaryButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/projects">
              <PrimaryButton sx={{ width: "200px" }}>
                <Typography variant="h6">Projects</Typography>
              </PrimaryButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
