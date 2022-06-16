import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const StyledContainr=styled.div`
height: 80vh;
width: 100%;
display: flex;
flex-direction: row;
.signdeco{
 width: 50%;
 height: 100%;
 background:linear-gradient(rgba(12,128,58,0.8), rgba(12,128,58,0.8)), url('https://thumbs.dreamstime.com/b/digital-blue-background-numbers-machine-code-blinking-abstract-computer-digital-blue-background-numbers-machine-code-159869084.jpg');
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
         text-align: center;
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
    }
}
`;
export default function SignUp() {
    return (
        <StyledContainr>
            <div className='signdeco'>
                <h1>Digital Pay</h1>
                <p><i>
                your trusted financial  services... 
                </i></p>
                <div className='ver'>
                    <h2>
                    Just one Step Closer 
                    </h2>
                    <h2>
                    to be a verified user
                    </h2>
                </div>
            </div>

            <div className='main-form'>
              <div className='formm'>
              <TextField style={{
                  marginBottom:10,
                  width:'80%'
              }} id="outlined-basic" label="Enter Email Address" variant="outlined" />
              <TextField style={{
                  marginBottom:10,
                  width:'80%'
              }} id="outlined-basic" label="Phone Number" variant="outlined" />
              <TextField style={{
                  marginBottom:10,
                  width:'80%'
              }} id="outlined-basic" label="🇳🇬 Country" variant="outlined" />
              <TextField style={{
                  marginBottom:10,
                  width:'80%'
              }}id="outlined-basic" label="Password" variant="outlined" />
               <TextField style={{
                  marginBottom:10,
                  width:'80%'
              }} id="outlined-basic" label="Confirm Password" variant="outlined" />
              <Button style={{width:'50%'}} variant="contained">Signup</Button>
              <p>Already have an account </p>
              <span>Login here</span>
              </div>
            </div>
        </StyledContainr>
    )
}
