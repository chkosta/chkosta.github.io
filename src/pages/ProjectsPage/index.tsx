import React from "react";
import { IProjectsPageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import { PrimaryButton } from "../../components/shared/StyledButtons";
import { projectsConfig } from "./projectsConfig";

const ProjectsPage = (props: IProjectsPageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 80px" }) }}>
      <Grid container spacing={5} justifyContent="center">
        {projectsConfig.projects.map((el, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "5%",
                width: "360px",
                height: "285px",
                borderRadius: "5%",
                backgroundColor: theme.palette.primary.dark,
              }}
            >
              <Box>
                <Typography fontSize={16} gutterBottom>
                  {el.group}
                </Typography>
                <Typography fontSize={22} fontWeight={"bold"} gutterBottom>
                  {el.title}
                </Typography>
                <Typography fontSize={16} gutterBottom>
                  {el.description}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", mt: "10px" }}>
                {el.buttons.map((el) => (
                  <PrimaryButton
                    key={el.name}
                    onClick={() => {
                      window.open(el.link, "_blank");
                    }}
                    sx={{ mr: "8px", mb: "8px" }}
                  >
                    {el.name}
                  </PrimaryButton>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
