import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from './BootsElements';

const SectionHeroStyles = styled.div`
  height: 105vh;
  max-height: 800px;
  color: white;
  position: relative;
  margin-top: -101px;

  .darkWrapper {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .txtWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .motto {
    margin-top: 100px;
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

  .funds {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export default function SectionHero({ videoSrcURL, videoTitle, ...props }) {
  return (
    <SectionHeroStyles>
      <div className="darkWrapper" />
      <video autoPlay muted loop className="myVideo">
        <source src={videoSrcURL} type="video/mp4" />
      </video>
      <BootsContainer className="txtWrapper">
        <div />
        <div className="motto">
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
        <div className="funds">
          <div className="subtitle">Fundusze Strukturalne</div>
          <div className="subtitle">Programy krajowe</div>
          <div className="subtitle">Fundusze EOG / "Norweskie"</div>
        </div>
      </BootsContainer>
    </SectionHeroStyles>
  );
}
