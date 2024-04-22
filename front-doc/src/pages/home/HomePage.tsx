import { CardComponent } from "../../components/cards/DocumentCardComponent";
import { Box, Stack } from "@mui/material";
import { documentTypes } from "../../constants/documentTypes";

export const HomePage = () => {
  return (
    <Stack
      margin={"auto"}
      useFlexGap
      width={"50%"}
      flexDirection={"row"}
      alignItems={"center"}
      gap={15}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      height={"calc(100vh - 120px)"}
    >
      {documentTypes.map((card) => {
        return (
          <CardComponent
            path={card.path}
            header={card.header}
            description={card.description}
          />
        );
      })}
    </Stack>
  );
};
