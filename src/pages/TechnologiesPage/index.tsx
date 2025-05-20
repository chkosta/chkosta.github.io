import React from "react";
import { ITechnologiesPageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import { technologiesConfig } from "./technologiesConfig";

const TechnologiesPage = (props: ITechnologiesPageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 200px" }) }}>
      <Grid container spacing={5} justifyContent="center">
        {technologiesConfig.technologies.map((el, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingX: "10%",
                paddingY: "4%",
                width: "360px",
                height: "250px",
                borderRadius: "5%",
                backgroundColor: theme.palette.primary.dark,
              }}
            >
              <Box>
                <Typography
                  gutterBottom
                  textAlign={"center"}
                  fontSize={20}
                  fontWeight={"bold"}
                >
                  {el.group}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr",
                    mt: "20px",
                  }}
                >
                  {el.technologies.map((el, index) => (
                    <Typography key={index} gutterBottom>
                      {el}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologiesPage;
