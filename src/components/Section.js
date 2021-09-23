import React from 'react'
import styled  from 'styled-components'
import Fade  from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                {props.rightBtnText &&
                <RightButton>
                {props.rightBtnText}
            </RightButton>
                }
                
            </ButtonGroup>
            <DownArrow src="https://www.pinclipart.com/picdir/middle/130-1304123_drop-down-arrow-svg-png-icon-free-download.png"/>
            </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap= styled.div`
width:100vw;
height:100vh;
background:orange;
background-size:covert;
background-position:center;
background-repeat:no-repeat;
background-image:url('https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg?tr=w-375');
display:flex;
flex-direction:column;
justify-content:space-between;//vertical
align-items:center; //horizontal;
background-image:${props=>`url("${props.bgImage}")`}
`
const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;
}

`

const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color: white;
display:flex;
justify-content:center;
align-items: center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cusror:pointer;
margin:8px;
`
const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow=styled.img`
    height:40px;
    animation:animateDown infinite 1.5s;
    overflow-x:hidden;

`
const Buttons=styled.div`


`

