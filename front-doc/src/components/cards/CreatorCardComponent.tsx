import { Card, CardContent, Typography, CardActionArea, Stack } from "@mui/material";
import "@fontsource/jost";
import { GitHub, Telegram } from "@mui/icons-material";

interface CreatorCardInterface  {
    name: "string",
    surname: "string",
    role: "string",  
    telegram: "string", 
    github: "string"
}


export const CreatorCard: React.FC<CreatorCardInterface> = (props) => {

    const handleTelegramClick = () => {
        props.telegram
        window.location.href="www.t.me/" + props.telegram;
    }

    const handleGithubClick = () => {
        window.location.href=props.github;
    }

    return (
        <Card
            sx={{
                width: 300
            }}
        >
            <CardContent 
                sx={{
                    alignItems: "center",
                    textAlign: "center" 
                }}
            >
                <Typography>{props.name} {" "} {props.surname}</Typography>
                <Typography>{props.role}</Typography>
                <Stack direction={'row'}>
                    <Telegram onClick={handleTelegramClick} />
                    <GitHub onClick={handleGithubClick} />
                </Stack>
                

            </CardContent>
        </Card>
    )
}