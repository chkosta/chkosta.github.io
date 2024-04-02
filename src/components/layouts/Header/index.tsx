import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import CustomDrawer from "./components/CustomDrawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

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

export default function Header() {
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
            {!isNotDesktop || (isNotDesktop && !open) ? (
              <Typography noWrap fontSize={20}>
                {selectedItem}
              </Typography>
            ) : (
              <Typography></Typography>
            )}

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

      <CustomDrawer
        open={open}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
}
