import React,{useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
import { cardClasses } from '@mui/material';
function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a >
                <img src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg" alt=""/>
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#" >Shop</a>
                <a href="#" >Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}></CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus} onClick={()=>setBurgerStatus(false)}>
                <CloseWrpper>
                <CustomClose></CustomClose>
                </CloseWrpper>
                {cars && cars.map((car,index)=>(
                     <li key={index}><a href="#">{car}</a></li>
                ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container=styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    justify-content:space-between;
    img{
        width:100px;
    }
    z-index:10;

`

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-width:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`

const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-width:600;
    text-transform:uppercase;
    margin-right: 10px;
    flex-wrap:nowrap;
}
`

const CustomMenu=styled(MenuIcon)`
    cursor:pointer;

`

const BurgerNav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index: 15;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=>props.show? 'translateX(0)':'translateX(100%)'};
    transition:transform 0.3s ;
    li{
        padding: 15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;
        }
    }
`

const CustomClose=styled(ClearIcon)`
cursor:pointer;

`
const CloseWrpper=styled.div`
    display:flex;
    justify-content: flex-end;
`