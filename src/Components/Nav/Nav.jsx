import React from 'react';
/** Import MUI **/
import Button from '@mui/material/Button';
/** Import Style **/
import "./Nav.scss";
export default function Nav(props) {
  return (
        <nav className='navbar'>
            <Button onClick={props.createSorting}>
                add card
            </Button>
            <Button onClick={props.numbersSorting}>
                sort card
            </Button>
        </nav>
  );
}