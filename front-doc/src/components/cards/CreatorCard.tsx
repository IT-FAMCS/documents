import { Card, CardContent, Typography, CardActionArea, Stack, Button } from "@mui/material";
import "@fontsource/jost";
import { GitHub, Telegram } from "@mui/icons-material";

interface CreatorCardInterface  {
    name: string,
    surname: string,
    role: string,  
    telegram: string, 
    github: string
}


export const CreatorCard: React.FC<CreatorCardInterface> = (props) => {

    const handleTelegramClick = () => {
        window.location.href="https://t.me/" + props.telegram;
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
                <Typography
                    variant="h5"
                    fontFamily={"Jost"}
                >
                    {props.name} {" "} {props.surname}
                </Typography>
                <Typography
                    fontFamily={"Jost"}
                    variant="body1"
                >
                    {props.role}
                </Typography>
                <Stack 
                    direction={'row'}
                    gap={10}
                    justifyContent={"center"}
                >
                    <Button 
                        variant="outlined"
                        onClick={handleTelegramClick}
                    >
                        <Telegram/>
                    </Button>
                    <Button 
                        variant="outlined"
                        onClick={handleGithubClick}
                    >
                        <GitHub/>
                    </Button>
                </Stack>                

            </CardContent>
        </Card>
    )
}