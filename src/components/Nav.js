import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components'

const StyledNav=styled.nav`
width: 100%;
max-height: 103px;
background-color:white;
display: flex;
flex-direction: row;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
padding: 10px;
overflow-x: hidden;
z-index: 100px;

.logo{
    display: grid;
    width: 300px;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D9D9D9;
    
    h4{
    color: #0C803A;
    font-size: 43px;
    margin: 0px;
    text-shadow: 1px 1px rgba(0,0,0,0.5);
    font-weight: 400;
   
}
p{
    font-size: 12px;
    margin: 0px;

}
}
.main-content{
    flex: 1;
    background-color: white;
    min-height: 100%;
    flex-direction: column;
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: relative;
        margin-top: 40px;
        a{
            text-decoration: none;
            color: black;
        }
        li{
        list-style: none;
        display: inline;
        cursor: pointer;
        
        }
    }
}
`;
export default function Nav() {
    let navigate = useNavigate();
    return (
        <StyledNav>
         <div className='logo'>
             <h4>Digital Pay</h4>
             <p>your trusted financial  services...</p>
         </div>
         <div className='main-content'>
          <ul>
              <li>Send</li>
              <li>Receive</li>
              <li>About Us</li>
              <li>Help</li>
              <Link to='login'>
              <li>sign in</li>
              </Link>
              <li>
              <Button onClick={()=>{
              navigate('sign-up')
              }} variant="contained">Join now</Button>
              </li>
          </ul>
         </div>
        </StyledNav>
    )
}
