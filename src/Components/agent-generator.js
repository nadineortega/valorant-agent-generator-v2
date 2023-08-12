import React from "react";
import styled from "styled-components";
import astra from "../Images/valorant-agents/astra.png";
import breach from "../Images/valorant-agents/breach.png";
import brimstone from "../Images/valorant-agents/brimstone.png";
import chamber from "../Images/valorant-agents/chamber.png";
import cypher from "../Images/valorant-agents/cypher.png";
import deadlock from "../Images/valorant-agents/brimstone.png";
import fade from "../Images/valorant-agents/fade.png";
import gecko from "../Images/valorant-agents/gecko.png";
import harbor from "../Images/valorant-agents/harbor.png";
import jett from "../Images/valorant-agents/jett.png";
import killjoy from "../Images/valorant-agents/killjoy.png";
import neon from "../Images/valorant-agents/neon.png";
import omen from "../Images/valorant-agents/omen.png";
import phoenix from "../Images/valorant-agents/phoenix.png";
import raze from "../Images/valorant-agents/raze.png";
import reyna from "../Images/valorant-agents/reyna.png";
import sage from "../Images/valorant-agents/sage.png";
import sova from "../Images/valorant-agents/sova.png";
import viper from "../Images/valorant-agents/viper.png";
import yoru from "../Images/valorant-agents/yoru.png";

const preloadImages = async (images) => {
  try {
    await Promise.all(
      images.map((imgSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imgSrc;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  } catch (error) {
    console.error("Error preloading images:", error);
  }
};

const RandomAgentGenerator = () => {
  function getRandomAgent(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [agent, setAgent] = React.useState(0);
  const images = [
    astra,
    breach,
    brimstone,
    chamber,
    cypher,
    deadlock,
    fade,
    gecko,
    harbor,
    jett,
    killjoy,
    neon,
    omen,
    phoenix,
    raze,
    reyna,
    sage,
    sova,
    viper,
    yoru,
  ];

  const handleClick = () => {
    const randomAgentImage = getRandomAgent(0, images.length - 1);

    setAgent(randomAgentImage);
  };

  const currentAgent = images[agent];

  React.useEffect(() => {
    preloadImages();
  }, []);

  return (
    <>
      <button className="generate-btn" onClick={handleClick}>
        {" "}
        get agent
      </button>
      <RandomGenerator>
        <img
          src={currentAgent}
          key={currentAgent}
          alt="valorant-agent"
          width="350"
          height="680"
        />
      </RandomGenerator>
    </>
  );
};

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
