import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const StyledContainr=styled.div`
height: 60vh;
width: 100%;
display: flex;
flex-direction: row;
.signdeco{
 width: 50%;
 height: 100%;
 background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://thumbs.dreamstime.com/b/digital-blue-background-numbers-machine-code-blinking-abstract-computer-digital-blue-background-numbers-machine-code-159869084.jpg');
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 h1{
     color: white;
     text-align: center;
     line-height: 12px;
     margin-top:100px;
 }
 p{
     color: white;
     text-align: center;
 }
 .ver{
     margin-top: 100px;
     h2{
         color: white;
         text-align: right;
         margin-right: 20px;
     }
 }
}
.main-form{
    width: 50%;
    background-color:#ECFFEE;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .formm{
        width: 80%;
        height: 90%;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 0px 1px rgba(12,128,58,0.8);
        display: flex;
        flex-direction: column;
        padding: 10px;
       align-items: center;
       p{
           line-height: 5px;
       }
       span{
        line-height: 5px;
        font-weight: bold;
        border-bottom: 1px solid black;
       }
       h4{
           line-height: 3px;
           color: rgb(12,128,58);
           text-align: right;
           width: 100%;
           font-weight: lighter;
           margin-right: 20px;
       }
    }
}
`;
export default function LogIn() {
    return (
        <StyledContainr>
            <div className='signdeco'>
                <h1>Welcome Back</h1>
                <p>We are glad to see you again! Instant 
                    deposits, withdrawals & payouts trusted
                     by millions worldwide</p>
                <div className='ver'>
                    <h2>
                    ~Digital Pay
                    </h2>
                </div>
            </div>

            <div className='main-form'>
              <div className='formm'>
              <TextField  style={{
                  marginBottom:10,
                  width:'90%'
              }} id="outlined-basic" label="Enter Email Address" variant="outlined" />
              <TextField style={{
                  marginBottom:10,
                  width:'90%'
              }}id="outlined-basic" label="Password" variant="outlined" />
        
              <Button style={{width:'50%'}} variant="contained">Sign in</Button>
              <h4>Forgot password ?</h4>
              <p>Already have an account </p>
              <span>Login here</span>
              </div>
            </div>
        </StyledContainr>
    )
}
