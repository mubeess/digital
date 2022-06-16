import { FacebookOutlined, MailOutline, Twitter, YouTube } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const StyledContainr=styled.div`
max-height:250px;
background-color: white;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
.topFoot{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    ul{
        li{
            display: inline;
            margin-left: 20px;
        }
    }
    .social{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:200px;
    }
}
p{
    margin-left: 20px;
}
`;
                        
export default function Footer() {
    return (
        <StyledContainr>
            <div className='topFoot'>
            <ul>
                <li>About</li>
                <li>Support</li>
                <li>Help</li>
                <li>Office</li>
                <li>Send</li>
            </ul>

            <div className='social'>
                <FacebookOutlined/>
                <Twitter/>
                <MailOutline/>
                <YouTube/>
            </div>
            </div>
        <Divider style={{width:'100%',backgroundColor:'#D9D9D9'}}/>
        <div className='topFoot'>
            <p>Copyright © 2022 Digital Pay  All Rights Reserved.</p>
            <ul>
                     
                <li>Security</li>
                <li>Terms </li>
                <li>Privacy</li>
              
        </ul>
        </div>
        <p>Digital Pay by Easy Instant Tech</p>
        </StyledContainr>
    )
}
