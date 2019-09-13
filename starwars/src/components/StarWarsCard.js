import React from "react";
import styled from "styled-components";

const StarWarsCard = props =>{
    console.log(props);
    return (
        <h2>{props.name}</h2>
    )
}

export default StarWarsCard;