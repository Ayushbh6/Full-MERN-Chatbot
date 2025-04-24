import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        textDecoration: 'none',
      }}
      component={Link}
      to="/"
    >
      <Box
        component="img"
        src="openai.png"
        alt="openai"
        sx={{
          width: 30,
          height: 30,
          filter: 'invert(1)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          fontWeight: 700,
          color: 'text.primary',
          letterSpacing: 1,
        }}
      >
        <Box component="span" sx={{ color: 'primary.main' }}>MERN</Box>
        <Box component="span" sx={{ color: 'secondary.main' }}>-GPT</Box>
      </Typography>
    </Box>
  );
};

export default Logo;
