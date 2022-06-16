import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Details from './Details';
import { Divider } from '@mui/material';
import Calculator from './Calculator';
import Why from './Why';
import Make from './Make';
import Steps from './Steps';
import Footer from './Footer';

const StyledContainr=styled.div`
min-height: 100vh;
width: 100%;
background-color:white;
overflow-x: hidden;
.zero{
    text-align: center;
    font-weight: 400;
    font-size: 60px;
}
.zero2{
    text-align: center;
    font-weight: 400;
}
.send-money{
    text-align:center;
    font-weight: 29px;
    font-weight: 300;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  

}
`;

export default function Home() {
    return (
        <StyledContainr>
            <Nav/>
            <Details/>
            <Divider style={{width:'100%',marginTop:10}}/>
            <h1 className='zero'>
            Zero charges Fees on money Transfer
            </h1>
            <h4 className='send-money'>
            Send money to a bank account overseas with Digital Pay  and you won't pay any
             transfer fees. Use the calculator and find out how much you could save.
            </h4>
            <Calculator/>
            <Why/>
            <Make/>
            <h1 className='zero2'>
            GET STARTED IN 3 STEPS AND  ENJOY DIGITAL PAY NOW 
            </h1>
            <Steps/>
            <Footer/>
        </StyledContainr>
    )
}
