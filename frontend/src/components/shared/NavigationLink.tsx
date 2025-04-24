import { Link } from "react-router-dom";
import { Button } from "@mui/material";

type Props = {
  to: string;
  text: string;
  onClick?: () => Promise<void>;
};

const NavigationLink = ({ to, text, onClick }: Props) => {
  return (
    <Button
      component={Link}
      to={to}
      onClick={onClick}
      variant="text"
      sx={{
        color: 'text.primary',
        textTransform: 'none',
        fontWeight: 500,
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      {text}
    </Button>
  );
};

export default NavigationLink;
