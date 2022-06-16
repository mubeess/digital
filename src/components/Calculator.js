import React from 'react'
import styled from 'styled-components'

const StyledContainr=styled.div`
width: 50%;
height: 450;
background-color:white;
margin-right: auto;
margin-left: auto;
margin-bottom: 80px;
.head{
    width:100%;
    height: 50px;
    background-color: #0C803A;
    display: flex;
    justify-content: center;
    align-items: center;
    h4{
        color: white;
        text-align: center;
      
    }
}
.body{
    min-height: 442px;
    width: 99.5%;
    border: 1px solid #DDDDDD;
    .inputs{
        border-bottom: 1px solid #D9D9D9;
        padding: 10px;
        display: flex;
        flex-direction: row;
        .input{
            display:flex;
            width:50%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-right: 1px solid #D9D9D9;
            p.adr{
                line-height:20px;
                font-size: 16px;
            }
            p{
                font-weight:lighter;
                font-size: 26px;
                line-height: 18px;
            }
            input{
                width:80%;
                height:30px;
                border: none;
                background-color: #f9f9f9;
                font-size: 20px;
                font-weight: bold;
            }
        }
    .select{
        display:flex;
            width:50%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            select{
                width: 50%;
                height: 40px;
                font-size: 20px;
                font-weight: 400;
                border:1px solid #f9f9f9;
                
                option{
                    font-size: 20px;
                    font-weight: 400;
                }
            }
    }
    }
}

.total{
    width: 100%;
    height: 70px;
    background-color: #ECFFEE;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2{
        margin: 10px;
    }
}
.btn{
    width: 100%;
    height: 77px;
    background-color:#0C803A;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    h2{
        color: white;
    }
}
`;
export default function Calculator() {
    return (
        <StyledContainr>
            <div className='head'>
                <h4>610NGN = 1USD</h4>
            </div>
            <div className='body'>
             <div className='inputs'>

            <div className='input'>
            <p>You send from Nigeria</p>
            <input placeholder='0' type='text'/>
           </div>

           <div className='select'>
               <select>
                   <option>🇳🇬 NGN</option>
               </select>
           </div>
              
             </div>


             <div className='inputs'>

            <div className='input'>
            <p>You Receive in America</p>
            <input placeholder='0' type='text'/>
           </div>

           <div className='select'>
               <select>
                   <option>🇺🇸 USD</option>
               </select>
           </div>
              
             </div>


             <div className='inputs'>

            <div className='input'>
            <p>Collection  Point</p>
            <p className='adr'>United State of America</p>
           </div>

           <div className='select'>
               <select>
                   <option>N0. 23 Office 5, Los Angels,  United State of America</option>
               </select>
           </div>
              
             </div>

             <div className='inputs'>

            <div className='input'>
            <p>Pay with</p>
            <p className='adr'>Debit Card</p>
           </div>
    
             </div>
             
            </div>
        <div className='total'>
         <h2>TOTAL PAY</h2>
         <h2>N61300</h2>
        </div>
        <div className='btn'>
         <h2>GET STARTED</h2>
        </div>
        </StyledContainr>
    )
}
