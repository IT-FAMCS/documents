import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import "@fontsource/jost";

interface CardComponentProps {
  path: string;
  header: string;
  description: string;
}

export const CardComponent: React.FC<CardComponentProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.path);
  };

  return (
    <Card variant="outlined" sx={{ width: 300, height: 150 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent
          style={{ backgroundColor: "#d9d9d9" }}
          sx={{ minWidth: 300, minHeight: 150 }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 3 }}
            fontFamily="Jost"
            fontWeight="700"
          >
            {props.header}
          </Typography>
          <Typography variant="body1" fontFamily="Jost" fontSize="24">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
