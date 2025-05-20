import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import CustomDrawer from "./components/CustomDrawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MuiAppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");

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

            <Link to="/" onClick={() => setSelectedItem("")}>
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
        setSelectedItem={setSelectedItem}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
}
