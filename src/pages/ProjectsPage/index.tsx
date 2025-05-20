import React from "react";
import { IProjectsPageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import { projectsConfig } from "./projectsConfig";

const ProjectsPage = (props: IProjectsPageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 200px" }) }}>
      <Grid container spacing={5} justifyContent="center">
        {projectsConfig.projects.map((el, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "4%",
                width: "360px",
                height: "250px",
                borderRadius: "5%",
                backgroundColor: theme.palette.primary.dark,
              }}
            >
              <Box>
                <Typography gutterBottom>{el.group}</Typography>
                <Typography fontSize={20} fontWeight={"bold"} gutterBottom>
                  {el.title}
                </Typography>
                <Typography gutterBottom>{el.description}</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                {el.icons.map((el, index) => (
                  <Tooltip title={el.name} key={index}>
                    <IconButton
                      onClick={() => {
                        window.open(el.link, "_blank");
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  </Tooltip>
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
