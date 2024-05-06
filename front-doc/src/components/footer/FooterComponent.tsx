import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export const FooterComponent = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/creators")
  }
  
  return (
    <footer className="footer-component">
      <Stack
        padding={"10px"}
        alignItems="center"
        justifyContent="center"
        direction={"column"}
        spacing={2}
      >
        <Button           
          variant="outlined"
          style={{
            borderColor: "#000000",
            color: "#000000",
            margin: "0 40px 0 0",
          }}          
          onClick={handleButtonClick}
        >
          О создателях
        </Button>
      </Stack>
    </footer>
  );
};
