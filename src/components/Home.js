import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
         <Section
            title="Model S" 
            description="Order Online for Touchless Delivery"
            backgroundImg="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg?tr=w-375"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
         />
         <Section
         title="Model Y" 
         description="Order Online for Touchless Delivery"
         backgroundImg="https://www.repairerdrivennews.com/wp-content/uploads/2021/07/tesla-model-y-4-scaled-e1627399513923.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventory"
         />
         <Section
         title="Model 3" 
         description="Order Online for Touchless Delivery"
         backgroundImg="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg?tr=w-375"
         leftBtnText="Custom order"
         />
        </Container>
    )
}

export default Home

const Container=styled.div`
    height:100vh;
`