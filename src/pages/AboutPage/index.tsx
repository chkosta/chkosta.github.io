import React from "react";
import { IAboutPageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

const AboutPage = (props: IAboutPageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 200px" }) }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Background
      </Typography>
      <Box component="ul" sx={{ mt: 1 }}>
        <Typography component="li">
          Christos was born and raised in Larnaca, Cyprus.
        </Typography>
        <Typography component="li">
          He developed a passion for computers from an early age, sparking his
          interest in technology and programming.
        </Typography>
        <Typography component="li">
          He pursued his academic interests by completing the Computer
          Engineering and Informatics Integrated Master's Degree from the
          University of Patras.
        </Typography>
        <Typography component="li">
          He is currently a skilled Full-Stack Developer, proficient in a wide
          range of technologies and frameworks.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
