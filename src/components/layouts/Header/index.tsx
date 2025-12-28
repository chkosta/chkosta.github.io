import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import CustomDrawer from "./components/CustomDrawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MuiAppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function Header() {
  const location = useLocation();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");

  React.useEffect(() => {
    const map: Record<string, string> = {
      "/": "",
      "/about": "About",
      "/experience": "Experience",
      "/projects": "Projects",
      "/technologies": "Technologies",
      "/tooling": "Made With",
    };

    setSelectedItem(map[location.pathname] ?? "");
  }, [location.pathname]);

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
            <Typography noWrap fontSize={18}>
              {selectedItem}
            </Typography>

            <Link to="/">
              <Avatar
                alt="Profile"
                src="images/profile.jpg"
                sx={{
                  width: 30,
                  height: 30,
                }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <CustomDrawer
        open={open}
        selectedItem={selectedItem}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
}
