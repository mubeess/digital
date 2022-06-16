import React from 'react'
import styled from 'styled-components'

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
    justify-content: space-between;
    .list-item{
        height: 477px;
        width: 330px;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }
}
`;
export default function Why() {
    return (
        <StyledContainr>
            <h1>WHY CHOOSE US DIGITAL PAY</h1>
            <div className='list'>
            <div className='list-item'>

            </div>
            </div>
        </StyledContainr>
    )
}
