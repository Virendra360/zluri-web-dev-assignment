import React, { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import Dropdown from "./dropdown";

const S4 = () => {

    const [imageSrc,setImageSrc]=useState(null);

    const getData=(valueT)=>{
        console.log(`cominf from child ${valueT}`);
        setImageSrc(valueT);
      }

    return (
        <StyledWrapper>
            <StyledContainer>
                <GridDiv>
                    <div style={{paddingTop:"10px",marginRight:"20px"}}><Dropdown onChange={getData}></Dropdown></div>
                    <div><TerrainImg style={{border:imageSrc==null?"none":"10px solid white"}} src={imageSrc}  width="100%" name="imgContainer"></TerrainImg></div>
                </GridDiv>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default S4;

const StyledWrapper = styled(Wrapper)`
background-color:#E1E8F8;
font-family:Lexend;
`
const StyledContainer = styled(Container)`
 
`
const  TerrainImg = styled.img`
  width:480px;
  height:340px;
  border:10px solid white;
  border-radius:10px;
`

const GridDiv = styled.div`
     display: grid;
     max-width: 90% ;
     grid-template-columns: 4fr 8fr ;
     gap: 15px 15px;

    
    @media (max-width: 600px){
        ${'' /* For Mobile */}
        grid-template-columns: 12fr ;
        padding-left:50px;
    }

`;

