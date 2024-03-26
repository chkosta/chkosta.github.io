import React from "react";
import { IToolingPageProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ToolingPage = (props: IToolingPageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...(!isMobile && { m: "0 80px" }) }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Libraries and Frameworks
      </Typography>
      <Typography component="ul" mt={2}>
        <Typography component="li" fontSize={18}>
          <a
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff" }}
          >
            Npm
          </a>{" "}
          for package management
        </Typography>
        <Typography component="li" fontSize={18}>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff" }}
          >
            React.js
          </a>{" "}
          for the ecosystem
        </Typography>
        <Typography component="li" fontSize={18}>
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff" }}
          >
            Github-Pages
          </a>{" "}
          for hosting the site
        </Typography>
      </Typography>

      <Typography variant="h5" fontWeight={"bold"} mt={8}>
        User Interface
      </Typography>
      <Typography component="ul" mt={2}>
        <Typography component="li" fontSize={18}>
          <a
            href="https://mui.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff" }}
          >
            Material UI
          </a>{" "}
          for the UI components
        </Typography>
        <Typography component="li" fontSize={18}>
          <a
            href="https://mui.com/material-ui/material-icons/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff" }}
          >
            Material Icons
          </a>{" "}
          for the icons
        </Typography>
        <Typography component="li" fontSize={18}>
          Segoe UI Symbol font
        </Typography>
      </Typography>

      <Typography fontSize={18} mt={8}>
        Website code is open source at{" "}
        <a
          href="https://github.com/chkosta/chkosta.github.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff" }}
        >
          Github
        </a>
        .
      </Typography>
    </Box>
  );
};

export default ToolingPage;
