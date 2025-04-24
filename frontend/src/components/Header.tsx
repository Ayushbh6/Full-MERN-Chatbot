import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

interface HeaderProps {
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, isDarkMode }) => {
  const auth = useAuth();
  
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ 
        display: "flex", 
        justifyContent: "space-between",
        maxWidth: '1200px',
        width: '100%',
        mx: 'auto',
        px: { xs: 2, md: 4 }
      }}>
        <Logo />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                to="/chat"
                text="Go To Chat"
              />
              <NavigationLink
                to="/"
                text="Logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                to="/login"
                text="Login"
              />
              <NavigationLink
                to="/signup"
                text="Signup"
              />
            </>
          )}
          <IconButton onClick={onThemeToggle} color="inherit">
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
