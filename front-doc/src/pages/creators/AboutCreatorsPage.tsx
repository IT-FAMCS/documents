import { Stack } from "@mui/material";
import { CreatorCard } from "../../components/cards/CreatorCard"
import { creatorsInfo } from "../../constants/CreatorsInfo"


export const AboutCreatorsPage = () => {

    return (
        <Stack
        margin={"auto"}
        useFlexGap
        width={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={0}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        height={"calc(100vh - 120px)"}
        >
        {creatorsInfo.map((info) => {
            return(
                <CreatorCard
                    name={info.name} 
                    surname={info.surname}
                    role={info.role}
                    telegram={info.telegram}
                    github={info.github}
                ></CreatorCard>
            )
        })}
        </Stack>
    )
}