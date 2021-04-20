import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from './BootsElements';

const SectionHeroStyles = styled.div`
  height: 100vh;
  max-height: 800px;
  color: white;
  position: relative;
  margin-top: -56px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .myVideo {
    position: absolute;
    z-index: -2;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    filter: saturate(30%);
  }

  .numbers {
    margin-left: 2px;
    margin-bottom: 5px;
    color: #8d99ae;
  }

  .title {
    font-size: 84px;
    line-height: 100px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-weight: 800;
    letter-spacing: -0.39px;
    display: block;
  }

  .start {
    font-style: normal;
    background-color: var(--grey);
  }

  .end {
    font-style: normal;
    border-radius: 1em 0 1em 0;
    background-position: 0 50%;
    background-image: linear-gradient(
      -100deg,
      rgba(255, 182, 72, 0.15),
      rgba(255, 182, 72, 0.8) 100%,
      rgba(255, 182, 72, 0.25)
    );
  }

  .subtitle {
    font-size: 20px;
    line-height: 43px;
    letter-spacing: 3px;
  }
`;

export default function SectionHero({ videoSrcURL, videoTitle, ...props }) {
  return (
    <SectionHeroStyles>
      <div className="wrapper" />
      <video autoPlay muted loop className="myVideo">
        <source src={videoSrcURL} type="video/mp4" />
      </video>
      <BootsContainer>
        <div>
          <h1 className="title">
            <em className="start">Ma</em>ster<em className="end">projekt</em>
          </h1>
          <p className="subtitle">
            Sporządzamy najwyższej
            <br /> jakości dokumentacje
            <br />
            aplikacyjne
          </p>
        </div>
      </BootsContainer>
    </SectionHeroStyles>
  );
}
