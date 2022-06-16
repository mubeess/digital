import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
const StyledContainr=styled.div`
height: 70vh;
width: 100%;
background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0,0, 0.7)),url('https://www.krgroup.com/wp-content/uploads/2021/02/page-managed-services.jpg');
background-color: black;
margin-top:10px;
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;


p{
    color: white;
    font-weight: 700;
    font-size: 32px;
    line-height: 10px;
}
h2{
    color: white;
    font-size: 85px;
    font-weight: 700px;
   line-height: 10px;
}
h4{
    color: white;
    line-height: 10px;

}
`;
export default function Details() {
    return (
        <StyledContainr>
            <p>Introducing</p>
            <h2>Digital Pay</h2>
            <h4>Your trusted financial Services wherever youre in the world.</h4>
            <Button variant="contained">Join for Free</Button>
        </StyledContainr>
    )
}
