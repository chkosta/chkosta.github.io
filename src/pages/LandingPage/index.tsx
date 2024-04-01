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
              m: "2%",
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: "2.5rem",
            "@media (max-width:600px)": { fontSize: "2rem" },
          }}
        >
          Christos Costa
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            "@media (max-width:600px)": { fontSize: "1.2rem" },
          }}
        >
          Full Stack Developer
        </Typography>

        <Grid container justifyContent="center" spacing={2} mt="8%">
          <Grid item xs={12} md={4}>
            <Link to="/about">
              <PrimaryButton sx={{ width: "80%" }}>
                <Typography variant="h6">About</Typography>
              </PrimaryButton>
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Link to="/experience">
              <PrimaryButton sx={{ width: "80%" }}>
                <Typography variant="h6">Experience</Typography>
              </PrimaryButton>
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Link to="/projects">
              <PrimaryButton sx={{ width: "80%" }}>
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
