import React from "react";
import styled from "styled-components";

const AgentGenerator = () => {
    var agentList = [
    // '../Images/valorant-agents/Astra.png', '../Images/valorant-agents/Breach.png', '../Images/valorant-agents/Brimstone.png', '../Images/valorant-agents/Chamber.png', '../Images/valorant-agents/Cypher.png','../Images/valorant-agents/Fade.png','../Images/valorant-agents/Jett.png','../Images/valorant-agents/KillJoy.png','../Images/valorant-agents/Neon.png','../Images/valorant-agents/Omen.png', '../Images/valorant-agents/Phoenix.png', '../Images/valorant-agents/Raze.png', '../Images/valorant-agents/Reyna.png', '../Images/valorant-agents/Sage.png', '../Images/valorant-agents/Sova.png', '../Images/valorant-agents/Viper.png', '../Images/valorant-agents/Yoru.png'
    'Astra.png', 'Breach.png', 'Brimstone.png', 'Chamber.png', 'Cypher.png','Fade.png','Jett.png','KillJoy.png','Neon.png','Omen.png', 'Phoenix.png', 'Raze.png', 'Reyna.png', 'Sage.png', 'Sova.png', 'Viper.png', 'Yoru.png'
];

const randomAgent = agentList[Math.floor(Math.random() * agentList.length)];
var selectedAgent_image = agentList[randomAgent];

document.getElementById('agent_selected').src = `./Images/valorant-agents/${selectedAgent_image}`;

    return (
        <RandomAgentGenerator>
            {randomAgent}
        </RandomAgentGenerator>
    );
}

export default AgentGenerator;

const RandomAgentGenerator = styled.div`
    width: 380px;
    height: 800px;
    background-color: red;
    margin: 0 auto;
    display: block;

    @media only screen and (max-width: 600px) {
        width: 70vw;
        height: 620px;
        background-color: lime;
    }
`;