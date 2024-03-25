import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "../../../pages/LandingPage";
import AboutPage from "../../../pages/AboutPage";
import ExperiencePage from "../../../pages/ExperiencePage";
import ToolingPage from "../../../pages/ToolingPage";
import ProjectsPage from "../../../pages/ProjectsPage";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

export default function PersistentDrawer() {
  const theme = useTheme();
  const isNotDesktop = !useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("Christos Costa");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography noWrap fontSize={20}>
              {selectedItem}
            </Typography>

            <Link to="/" onClick={() => setSelectedItem("Christos Costa")}>
              <Avatar
                alt="Profile"
                src="images/profile.jpg"
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

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
                <ChevronLeftIcon sx={{ color: theme.typography.body1 }} />
              ) : (
                <ChevronRightIcon sx={{ color: theme.typography.body1 }} />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider sx={{ backgroundColor: theme.palette.primary.light }} />

          <List>
            {[
              { text: "About", link: "/about", icon: <HomeIcon /> },
              { text: "Experience", link: "/experience", icon: <WorkIcon /> },
              { text: "Projects", link: "/projects", icon: <CodeIcon /> },
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
                    padding: "3px 6px",
                  }}
                >
                  <ListItemIcon sx={{ color: theme.typography.body1 }}>
                    {el.icon}
                  </ListItemIcon>
                  <ListItemText primary={el.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Divider sx={{ backgroundColor: theme.palette.primary.light }} />

          <Typography ml={3} mt={2}>
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
                text: "Linked In",
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
                    padding: "3px 6px",
                  }}
                >
                  <ListItemIcon sx={{ color: theme.typography.body1 }}>
                    {el.icon}
                  </ListItemIcon>
                  <ListItemText primary={el.text} />
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
          <Route path="/tooling" Component={ToolingPage} />
        </Routes>
      </Main>
    </Box>
  );
}
