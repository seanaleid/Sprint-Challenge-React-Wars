import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 500px;
margin: 0 auto;
margin-top: 30px;
background: #2C8CD0;
border: 2px solid #413539;
display: flex;
border-radius: 15px 50px;
`;

const Columns = styled.div`
display: flex;
flex-direction: column;
align-content: ${props =>(props.primary ? `center` : `flex-end`)};
align-items: ${props =>(props.primary ? `center` : `flex-end`)};
padding: 20px;
`;

const Font = styled.div`
font-size: ${props =>(props.primary ? `2rem` : `.8rem`)};
color: #fff;
display: flex;
`;

const PicBox = styled.div`
width: 100px;
height: 100px;
background: #A9A1A6;
padding: 10px;
`;

const StarWarsCard = props =>{
    console.log(props);
    return (
        <Card>
            <Columns>
                <Font primary>{props.name}</Font>
                <PicBox />
            </Columns>
            <Columns>
                <Font>Birth year: {props.birth_year}</Font>
                <Font>Gender: {props.gender}</Font>
                <Font>Height: {props.height}</Font>
                <Font>Mass: {props.mass}</Font>
                <Font>Hair color: {props.hair_color}</Font>
                <Font>Eye color: {props.eye_color}</Font>
                <Font>Skin color: {props.skin_color}</Font>
            </Columns>
        </Card>
    )
}

export default StarWarsCard;