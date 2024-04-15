import * as React from 'react';
import {CardComponent} from '../../component/cards/CardComponent';
import { Box, Stack } from '@mui/material';



export const HomePage =() =>{
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack alignItems="center">
        <Stack width={'100%'} direction={'row'} spacing={20}>
          <Stack spacing={10} direction={'column'}>
            <CardComponent path={'/'} name={'Освобождение'} description={'Самый пиздатый освободос'}></CardComponent>
            <CardComponent path={'/'} name={'Освобождение'} description={'Самый пиздатый освободос'}></CardComponent>
          </Stack>
          <Stack spacing={10} direction={'column'}>
            <CardComponent path={'/'} name={'Освобождение'} description={'Самый пиздатый освободос'}></CardComponent>
            <CardComponent path={'/'} name={'Освобождение'} description={'Самый пиздатый освободос'}></CardComponent>
          </Stack>
        </Stack>
      </Stack>
    </div>
    )
};

