import Stack from "@mui/material/Stack";

export const FooterComponent = () => {
  return (
    <footer className="footer-component">
      <Stack
        useFlexGap
        alignItems="center"
        justifyContent="space-evenly"
        spacing={1}
      >
        <p>О создателях</p>
      </Stack>
    </footer>
  );
};
