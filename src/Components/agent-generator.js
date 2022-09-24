import React from "react";
import styled from "styled-components";



const RandomAgentGenerator = () => {

    function getRandomAgent(min,max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const [agent, setAgent] = React.useState(0);
    const images = [
        require('../Images/valorant-agents/astra.png'),
        require('../Images/valorant-agents/breach.png'),
        require('../Images/valorant-agents/brimstone.png'),
        require('../Images/valorant-agents/chamber.png'),
        require('../Images/valorant-agents/cypher.png'),
        require('../Images/valorant-agents/fade.png'),
        require('../Images/valorant-agents/jett.png'),
        require('../Images/valorant-agents/killjoy.png'),
        require('../Images/valorant-agents/neon.png'),
        require('../Images/valorant-agents/omen.png'),
        require('../Images/valorant-agents/phoenix.png'),
        require('../Images/valorant-agents/raze.png'),
        require('../Images/valorant-agents/reyna.png'),
        require('../Images/valorant-agents/sage.png'),
        require('../Images/valorant-agents/sova.png'),
        require('../Images/valorant-agents/viper.png'),
        require('../Images/valorant-agents/yoru.png'),
    ];

    const handleClick = () => {
        const randomAgentImage = getRandomAgent(0, images.length -1);

        setAgent(randomAgentImage);
    };

    const currentAgent = images[agent];

return (
    <>
    <button className="generate-btn" onClick={handleClick}> get agent</button>
    <RandomGenerator>
        <img src={currentAgent} alt="valorant-agent" width="350" height="680" />
    </RandomGenerator>
    </>
    );
}


export default RandomAgentGenerator;

const RandomGenerator = styled.div`
    width: 380px;
    height: 800px;
    margin: 0 auto;
    display: block;
    padding-top: 20px;

    @media only screen and (max-width: 600px) {
        width: 70vw;
        height: 550px;
    }
`;
