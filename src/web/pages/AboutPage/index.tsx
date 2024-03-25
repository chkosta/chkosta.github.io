import React from "react";
import { IAboutPageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

const AboutPage = (props: IAboutPageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 80px" }) }}>
      <Typography variant="h4" fontWeight={"bold"}>
        Background
      </Typography>
      <Typography component="ul" sx={{ mt: 2 }}>
        <Typography component="li" fontSize={18}>
          Christos was born and raised in Larnaca, Cyprus.
        </Typography>
        <Typography component="li" fontSize={18}>
          He developed a passion for computers from an early age, sparking his
          interest in technology and programming.
        </Typography>
        <Typography component="li" fontSize={18}>
          He pursued his academic interests by completing the Computer
          Engineering and Informatics master's degree from the University of
          Patras.
        </Typography>
        <Typography component="li" fontSize={18}>
          He is currently a skilled full stack developer, proficient in a wide
          range of technologies and frameworks.
        </Typography>
      </Typography>
    </Box>
  );
};

export default AboutPage;
