import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import logo from "../../Images/Raccoon.png";
import { Button } from "@mui/material";
import "../../components/header/Header.css";
import { ThemeContext } from "../../providers/ThemeProvider";

export const HeaderComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
        <div className="button-section">
          <Button id="topic" variant="outlined" onClick={changeTheme}>
            icon
          </Button>
          <Button id="account" variant="outlined">
            account
          </Button>
        </div>
      </Stack>
    </header>
  );
};
