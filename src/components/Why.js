import React from 'react'
import styled from 'styled-components'
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import HistoryIcon from '@mui/icons-material/History';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SecurityIcon from '@mui/icons-material/Security';

const StyledContainr=styled.div`
height: 820px;
width: 100%;
background-color:#ECFFEE;
padding: 20px;
h1{
    text-align: center;
    font-weight: lighter;
}
.list{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    padding: 20px;
    .list-item{
        height: 477px;
        width:20%;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px;
    }
}
`;
export default function Why() {
    return (
        <StyledContainr>
            <h1>WHY CHOOSE DIGITAL PAY</h1>
            <div className='list'>
            <div className='list-item'>
            <SwipeLeftIcon style={{fontSize:200}}/>
            <h3>Easy to use</h3>
            <p>
            Lisque persius interesset his et, in 
            quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
            </div>


            <div className='list-item'>
            <HistoryIcon style={{fontSize:200}}/>
            <h3>Faster Payment</h3>
            <p>
            Lisque persius interesset his et, in 
            quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
            </div>


            <div className='list-item'>
            <CurrencyExchangeIcon style={{fontSize:200}}/>
            <h3>Zero Fees</h3>
            <p>
            Lisque persius interesset his et, in 
            quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
            </div>


            <div className='list-item'>
            <SecurityIcon style={{fontSize:200}}/>
            <h3>100% Secure</h3>
            <p>
            Lisque persius interesset his et, in 
            quot quidam persequeris vim, ad mea essent possim iriure.
            </p>
            </div>
            </div>
        </StyledContainr>
    )
}
