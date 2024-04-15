import { useNavigate } from "react-router-dom"

import {Card, CardContent, Typography, CardActionArea} from "@mui/material"


interface CardComponentProps {
    path:string;
    name:string;
    description:string;
}


export const CardComponent: React.FC<CardComponentProps> = (props) => {    
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(props.path)
    }
    
    return (                 
                <Card variant="outlined">
                    <CardActionArea onClick={handleClick}>
                        <CardContent>
                            <Typography variant="h6"  sx={{ mb:3 }}>{props.name}</Typography>
                            <Typography variant="body1" color='text.secondary' >{props.description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>   
       
    )
}