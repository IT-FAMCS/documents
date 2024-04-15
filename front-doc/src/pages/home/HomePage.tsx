import * as React from 'react';
import {CardComponent} from '../../component/cards/CardComponent';
import { Box, Stack } from '@mui/material';
import {documentTypes} from '../../constants/documentTypes'


export const HomePage =() => {

let cardArr :any[] = [];
for(let i = documentTypes.length - 1; i > 0; i -= 2) {
  if(i-1 >= 0) {
    cardArr.push([documentTypes[i], documentTypes[i-1]])
  } else {
    cardArr.push([documentTypes[i]]);
  }
}
console.log(cardArr)
return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Stack alignItems="center">
        <Stack width={'100%'} direction={'row'} spacing={20}>
          {cardArr.map((arr) => {
            return <Stack direction={'column'} spacing={10} minWidth={200} minHeight={300}>
              {arr.map((card: { path: string; header: string; description: string; }) =>{
                return <CardComponent path={card.path} header={card.header} description={card.description}></CardComponent>
              })}
            </Stack>;
          })}
        </Stack>
      </Stack>
  </div>
    )
};

