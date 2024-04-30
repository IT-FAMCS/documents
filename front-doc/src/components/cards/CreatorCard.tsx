import { Card, CardContent, Typography, CardActionArea, Stack, Button } from "@mui/material";
import "@fontsource/jost";
import { GitHub, Telegram } from "@mui/icons-material";
import {telegramPrefix} from "../../constants/otherConstants";

interface CreatorCardInterface  {
    name: string,
    surname: string,
    role: string,  
    telegram: string, 
    github: string
}


export const CreatorCard: React.FC<CreatorCardInterface> = ({name, surname, role, telegram, github}: CreatorCardInterface) => {

    const handleTelegramClick = () => {
        window.location.href= telegramPrefix + telegram;
    }

    const handleGithubClick = () => {
        window.location.href=github;
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
                >
                    {[name, surname].join(' ')}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {role}
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