import React from 'react';
/** Import MUI **/
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/** Import Style **/
import "./Main.scss";
export default function Main(props) {
  return (
    <main>
      <Container className='main-first-child' sx={{width:"80% !important"}}>
        {props.randomNumbers.map((item,index) => {
          return (
            <Box key={index} sx={{p:0}}>
              <Button
                onClick={() => {
                  props.deleteRandomNumbers(item.id);
                }}
                sx={{
                  color:"black",
                  width:"100%",
                  display:"flex",
                  justifyContent:"flex-end"
                }}
              >
                X
              </Button>
                <Typography variant="h2">
                  {item.id}
                </Typography>
            </Box>
          );
        })}
      </Container>
      <Container className='main-second-child' 
        sx={{
          width:"20% !important",
          height:"94.9vh",
          border:"1px solid black",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
        <Typography variant='h5' sx={{
          fontWeight:"bold",
          width:250
        }}>
          {props.instruction}
        </Typography>
      </Container>
    </main>
  );
}