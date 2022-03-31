import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <div className='header'>
    <IconButton>
      <PersonIcon fontSize='large' className='header__icon' />
    </IconButton>
    <img className='header__logo' src='https://cdn-icons-png.flaticon.com/512/2111/2111653.png' ></img>
    <IconButton>
      <ForumIcon fontSize='large' className='header__icon' />
    </IconButton>
    </div>
    
  )
}

export default Header
