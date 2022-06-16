import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const StyledContainr=styled.div`
height: 430px;
width: 100%;
background: url('https://freedesignfile.com/upload/2016/12/Mobile-phone-bank-card-and-computer-Stock-Photo.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
align-items: flex-end;
.det{
    width: 50%;
    height: 100%;
    background-color:rgba(0,0,0,0.7);
    h1{
        color: white;
        text-align: center;
    }
    p{
        color: white;
        text-align: center;
    }
    .btn{
        display: flex;
        justify-content: space-evenly;
        margin-top: 60px;
    }
}
`;
export default function Make() {
    return (
        <StyledContainr>
          <div className='det'>
              <h1>make Payment right away from your comfort Zone</h1>
              <p>
              You can trust Digital Pay on online secure payment 
              </p>
            <div className='btn'>
            <Button variant="contained">Join for Free</Button>
            <Button color='error' variant="contained">Learn more</Button>
            </div>
          </div>
        </StyledContainr>
    )
}
