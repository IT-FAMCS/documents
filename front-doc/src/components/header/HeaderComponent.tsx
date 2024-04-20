import Stack from "@mui/material/Stack";
import logo from "../../Images/Raccoon.png";

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
        <button className="account">account</button>
        <button className="change-of-topic">change-of-topic</button>
      </Stack>
    </header>
  );
};
