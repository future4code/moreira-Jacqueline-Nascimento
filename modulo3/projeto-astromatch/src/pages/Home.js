import React from 'react';
import { Title, TitleArea } from '../components/StyleGeral';
// import IconButton from '@mui/material/IconButton';
// import PeopleIcon from '@mui/icons-material/PeopleAlt';
// import CheckIcon from '@mui/icons-material/Check';

export default function Home() {
  return (
  <div>
      <TitleArea>
        <Title>
            <h1 className='pink'>astro</h1>
            <h1 className='orange'>match</h1>
        </Title>
        {/* <IconButton>
            <PeopleIcon />
            <CheckIcon />
        </IconButton> */}
      </TitleArea>
      
      
  </div>);
}
