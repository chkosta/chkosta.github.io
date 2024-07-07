import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import BuildIcon from "@mui/icons-material/Build";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "../../../../../pages/LandingPage";
import AboutPage from "../../../../../pages/AboutPage";
import ExperiencePage from "../../../../../pages/ExperiencePage";
import ToolingPage from "../../../../../pages/ToolingPage";
import ProjectsPage from "../../../../../pages/ProjectsPage";
import TechnologiesPage from "../../../../../pages/TechnologiesPage";

const drawerWidth = 240;

const Main = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "isNotDesktop",
})<{
  open?: boolean;
  isNotDesktop?: boolean;
}>(({ theme, open, isNotDesktop }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!isNotDesktop && { marginLeft: `-${drawerWidth}px` }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...(!isNotDesktop && { marginLeft: 0 }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface ICustomDrawerProps {
  open: boolean;
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  handleDrawerClose: () => void;
}

export default function CustomDrawer({
  open,
  selectedItem,
  setSelectedItem,
  handleDrawerClose,
}: ICustomDrawerProps) {
  const theme = useTheme();
  const isNotDesktop = !useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.dark,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        variant={isNotDesktop ? "temporary" : "persistent"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon
                  sx={{ color: theme.palette.primary.contrastText }}
                />
              ) : (
                <ChevronRightIcon
                  sx={{ color: theme.palette.primary.contrastText }}
                />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider sx={{ backgroundColor: theme.palette.primary.light }} />

          <List>
            {[
              { text: "About", link: "/about", icon: <HomeIcon /> },
              { text: "Experience", link: "/experience", icon: <WorkIcon /> },
              { text: "Projects", link: "/projects", icon: <CodeIcon /> },
              {
                text: "Technologies",
                link: "/technologies",
                icon: <TerminalIcon />,
              },
              { text: "Made With", link: "/tooling", icon: <BuildIcon /> },
            ].map((el, index) => (
              <ListItem
                key={el.text}
                sx={{
                  backgroundColor:
                    selectedItem === el.text
                      ? theme.palette.primary.light
                      : "transparent",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                  },
                }}
              >
                <ListItemButton
                  component={Link}
                  to={el.link}
                  onClick={() => {
                    setSelectedItem(el.text);
                    if (isNotDesktop) {
                      handleDrawerClose();
                    }
                  }}
                  sx={{
                    padding: "4px ",
                  }}
                >
                  <ListItemIcon
                    sx={{ color: theme.palette.primary.contrastText }}
                  >
                    {el.icon}
                  </ListItemIcon>
                  <Typography fontSize={14}>{el.text}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Divider sx={{ backgroundColor: theme.palette.primary.light }} />

          <Typography fontSize={14} ml={3} mt={2}>
            Social
          </Typography>

          <List>
            {[
              {
                text: "Email",
                link: "mailto:christos_costa@hotmail.com",
                icon: <MailIcon />,
              },
              {
                text: "Linked-In",
                link: "https://www.linkedin.com/in/christoscosta/",
                icon: <LinkedInIcon />,
              },
              {
                text: "Github",
                link: "https://github.com/chkosta",
                icon: <GitHubIcon />,
              },
            ].map((el, index) => (
              <ListItem
                key={el.text}
                sx={{
                  backgroundColor:
                    selectedItem === el.text
                      ? theme.palette.primary.light
                      : "transparent",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                  },
                }}
              >
                <ListItemButton
                  href={el.link}
                  target="_blank"
                  sx={{
                    padding: "4px",
                  }}
                >
                  <ListItemIcon
                    sx={{ color: theme.palette.primary.contrastText }}
                  >
                    {el.icon}
                  </ListItemIcon>
                  <Typography fontSize={14}>{el.text}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Main open={open} isNotDesktop={isNotDesktop}>
        <DrawerHeader />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/experience" Component={ExperiencePage} />
          <Route path="/projects" Component={ProjectsPage} />
          <Route path="/technologies" Component={TechnologiesPage} />
          <Route path="/tooling" Component={ToolingPage} />
        </Routes>
      </Main>
    </>
  );
}
