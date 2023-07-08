import React, { useState } from "react";
import styled from 'styled-components';
import MountainImage from "../images/MountainImage.jpg"
import ForestImage from "../images/ForestImage.jpg"
import OceanImage from "../images/OceanImage.jpg"
import DesertImage from "../images/DesertImage.jpg"

const Dropdown = (props) => {

    const[terrain,setTerrain]=useState(null);

    const selectedTerrain=(e)=>{
             const valueT=e.target.value;
             setTerrain(valueT);
           props.onChange(valueT);
    }

    return (
        <>
            <DropdownSelect name="terrainSelected" required  onChange={selectedTerrain}>
        
                <DropdownOption value="" disabled selected hidden >Dropdown</DropdownOption>
                <DropdownOption value={MountainImage} >Mountain</DropdownOption>
                <DropdownOption value={ForestImage}>Forest</DropdownOption>
                <DropdownOption value={OceanImage}>Ocean</DropdownOption>
                <DropdownOption value={DesertImage}>Desert</DropdownOption>
               
            </DropdownSelect>
        </>
    )
}

export default Dropdown;

const DropdownSelect = styled.select`
   
   width:236px;
   Height:40px;
   Line-height:20px;
   font-family:Lexend;
   border:1px solid #DDDDDD;
   border-radius:8px;
   font-size:16px;
   padding:10px;
    
    &:invalid{
        color:#DDDDDD;
        border-color:DDDDDD;
    }
    
    &:valid{
        color:black;
        border-color: #5287E8;
        box-shadow: 1px 1px 1px #5C7AEA;  
    }
`;

const DropdownOption = styled.option`
    color:black;
    
    &:hover{
        border-color: #5287E8;
        box-shadow: 0px 4px 12px #000000; 
    }

`;