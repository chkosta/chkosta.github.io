import React from "react";
import { ILandingPageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Avatar, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/shared/StyledButtons";

const LandingPage = (props: ILandingPageProps) => {
  const theme = useTheme();
  const isNotDesktop = !useMediaQuery(theme.breakpoints.up("md"));

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
        sx={{
          width: isNotDesktop ? 250 : 350,
          height: isNotDesktop ? 250 : 350,
          mb: 2,
        }}
      />
      <Typography variant={isNotDesktop ? "h4" : "h3"} gutterBottom>
        Christos Costa
      </Typography>
      <Typography variant={isNotDesktop ? "h6" : "h5"}>
        Full Stack Developer
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 10,
        }}
      >
        <Link to="/about">
          <PrimaryButton
            sx={{
              mr: isNotDesktop ? 1 : 10,
              width: isNotDesktop ? "110px" : "200px",
              fontSize: isNotDesktop ? 16 : 24,
            }}
          >
            About
          </PrimaryButton>
        </Link>

        <Link to="/experience">
          <PrimaryButton
            sx={{
              mr: isNotDesktop ? 1 : 10,
              width: isNotDesktop ? "110px" : "200px",
              fontSize: isNotDesktop ? 16 : 24,
            }}
          >
            Experience
          </PrimaryButton>
        </Link>

        <Link to="/projects">
          <PrimaryButton
            sx={{
              width: isNotDesktop ? "110px" : "200px",
              fontSize: isNotDesktop ? 16 : 24,
            }}
          >
            Projects
          </PrimaryButton>
        </Link>
      </Box>
    </Box>
  );
};

export default LandingPage;
