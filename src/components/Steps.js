import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const StyledContainr=styled.div`
height: 500px;
width: 100%;
background-color: #D9D9D9;
.list{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    padding: 20px;
    .list-item{
        height: 350px;
        width:25%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        h3{
            border-bottom: 1px solid black;
        }
    }
}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
`;
export default function Steps() {
    return (
        <StyledContainr>
            <div className='list'>
            <div className='list-item'>
            <h1>1</h1>
            <h3>Create an Account</h3>
            <p>
            Lisque persius interesset his et, in 
            quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
            </div>

            <div className='list-item'>
            <h1>2</h1>
            <h3>Send Money</h3>
            <p>
            Lisque persius interesset his et, in 
            quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
            </div>

            <div className='list-item'>
            <h1>3</h1>
            <h3>Receive Money</h3>
            <p>
            Lisque persius interesset his et, in 
            quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
            </div>

            </div>
            <div className='btn'>
            <Button variant="contained">Open Free Account</Button>
            </div>
           
        </StyledContainr>
    )
}
