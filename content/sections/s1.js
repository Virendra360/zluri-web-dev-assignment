import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Answer below this.</p>
                    <SolutionDiv>
                        <GirdItem >1st</GirdItem>
                        <GirdItem >2nd</GirdItem>
                        <GirdItem >3rd</GirdItem>
                        <GirdItem >4th</GirdItem>
                    </SolutionDiv>
                </Title>
            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`
const SolutionDiv = styled.div`
     display: grid;
     max-width: 90% ;
     grid-template-columns: 3fr 3fr 3fr 3fr ;
     gap: 15px 15px;

     @media (max-width: 768px){
        ${'' /* For Laptip */}
        grid-template-columns: 6fr 6fr;
    }
    
    @media (max-width: 425px){
        ${'' /* For Mobile */}
        grid-template-columns: 12fr ;
    }

`;

const GirdItem = styled.div`
${'' /* grid-row:${(props)=>{return props.row}};
grid-column:${(props)=>{return props.col}}; */}

padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
text-align:center;
`