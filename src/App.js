import React from 'react';
import styled from 'styled-components';
import AgentContainer from './Components/agent-container.js';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
   <h1>Valorant Agent Generator</h1>
  
      <p>Click button to randomly select an agent to use for your current game</p>
      <button>Generate Now</button>
      <AgentContainer />
      
    <Footer>
    made by &nbsp;
<a href='https://github.com/nadin3amanda'>nadin3amanda </a>
    </Footer>
    </div>
    </React.Fragment>
  );
}

export default App;

const Footer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
  font-size: 10px;
  vertical-align: bottom; 

  a {
    text-decoration: none;
  }

`
