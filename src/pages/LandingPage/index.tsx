import React from "react";
import { Container, Typography, Grid, Avatar, Box } from "@mui/material";
import { PrimaryButton } from "../../components/shared/StyledButtons";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "70vh",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Profile"
            src="images/profile.jpg"
            sx={{
              width: "40%",
              "@media (max-width:600px)": { width: "60%" },
              height: "auto",
              m: "2%",
              borderRadius: "50%",
              aspectRatio: "1/1",
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
          Software Engineer
        </Typography>

        <Grid container justifyContent="center" spacing={2} mt="3%">
          <Grid item xs={12} md={5}>
            <Link to="/about">
              <PrimaryButton sx={{ width: "60%" }}>
                <Typography variant="h6">About</Typography>
              </PrimaryButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
