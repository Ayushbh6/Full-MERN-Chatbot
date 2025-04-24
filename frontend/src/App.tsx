import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useState } from 'react';
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";
import Footer from "./components/footer/Footer";
import { lightTheme, darkTheme } from './theme';

function App() {
  const auth = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
        }}
      >
        <Header onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {auth?.isLoggedIn && auth.user && (
              <Route path="/chat" element={<Chat />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
