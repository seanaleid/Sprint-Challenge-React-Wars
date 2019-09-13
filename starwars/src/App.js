import React from 'react';
import './App.css';
import StarWarsList from "./components/StarWarsList";
import styled from "styled-components";

const Font = styled.div`
font-size: ${props =>(props.primary ? `3.5rem` : `.8rem`)};
color: #fff;
display: flex;
background: #2C8CD0;
border: 2px solid #413539;

`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Font primary>React Wars</Font>
      <StarWarsList />
    </div>
  );
}

export default App;
