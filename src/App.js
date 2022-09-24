import React from 'react';
import styled from 'styled-components';
import AgentGenerator from './Components/agent-generator.js';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Valorant Agent Generator</h1>
            <p>Click button to randomly select an agent to use for your current game</p>
        <AgentGenerator />
        <Footer>
          &copy; &nbsp;
          <a href='https://github.com/nadin3amanda'>nadin3amanda </a>
        </Footer>
      </div>
    </React.Fragment>
  );
}

export default App;


const Footer = styled.div`
  width: 100vw;
  color: #fff;
  font-size: 13px;
  letter-spacing: 2px;
  vertical-align: bottom;
  margin-top: 50px;

  a {
    text-decoration: none;
  }

  a:hover {
    color: #ff33bb;
    transition: 2ms;
  }
  a:visited {
    color: aqua;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 0px;
}

`;
