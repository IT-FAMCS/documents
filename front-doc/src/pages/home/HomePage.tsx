import {CardComponent} from '../../component/cards/CardComponent';
import { Box, Stack } from '@mui/material';
import {documentTypes} from '../../constants/documentTypes'


export const HomePage = () => {
  
   return (
     <Stack
        margin={'auto'}
        useFlexGap
        width={"50%"}
        flexDirection={"row"}
        alignItems={'center'}
        gap={15}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
      {documentTypes.map((card) => {
         return (
           <CardComponent path={card.path} header={card.header} description={card.description} />
           );})} 
      </Stack>
    );
  };

