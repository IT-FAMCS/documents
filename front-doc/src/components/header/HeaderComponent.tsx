import Stack from "@mui/material/Stack";
import logo from "../../Images/Raccoon.png";
import { Button } from "@mui/material";
import { Pix } from "@mui/icons-material";

export const HeaderComponent = () => {
  return (
    <header className="header-component">
      <Stack
        useFlexGap
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        paddingX={"10px"}
      >
        <img className="logo" src={logo} alt="Raccoon logo"></img>
        <h1 className="header-text">Документооборот Проектного направления</h1>
        <section className="button-section">
          <Button
            style={{
              borderColor: "#000000",
              color: "#000000",
              margin: "0 40px 0 0",
            }}
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
        </section>
      </Stack>
    </header>
  );
};
