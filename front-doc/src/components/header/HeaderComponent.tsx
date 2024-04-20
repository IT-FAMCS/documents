import Stack from "@mui/material/Stack";
import logo from "../../Images/Raccoon.png";
import { Button } from "@mui/material";

export const HeaderComponent = () => {
  return (
    <header className="header-component">
      <Stack
        useFlexGap
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <a>
          <img className="logo" src={logo} alt="Raccoon logo"></img>
        </a>
        <h1 className="header-text">Документооборот Проектного направления</h1>
        <Button
          style={{ borderColor: "#000000", color: "#000000" }}
          variant="outlined"
        >
          account
        </Button>
        <Button
          style={{ borderColor: "#000000", color: "#000000" }}
          variant="outlined"
        >
          change of topic
        </Button>
      </Stack>
    </header>
  );
};
