// Znaleźć video *
// Zapobrać z cloudinary *
// Upchnąć video do gatsby *
// Przyjmuje link do video *
// Przyjmuje dane do karuzeli
// Przyjmuje napisy

import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from './BootsElements';

const VideoStyle = styled.div`
  .myVideo {
    position: absolute;
    z-index: -2;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    margin-top: -80px;
  }

  .wrapper {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 0.5;
    background-image: url(https://cdnjs.cloudflare.com/ajax/libs/vegas/2.3.1/overlays/03.png);
  }
`;

const HeaderStyle = styled.header`
  height: calc(100vh - 93px);
  color: white;

  .headerWrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    font-family: Poppins, sans-serif;
    display: block;
  }

  .start {
    font-style: normal;
    background-color: #8d99ae;
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

export default function Hero({ videoSrcURL, videoTitle, ...props }) {
  return (
    <div>
      <VideoStyle>
        <div className="wrapper" />
        <video autoPlay muted loop className="myVideo">
          <source src={videoSrcURL} type="video/mp4" />
        </video>
      </VideoStyle>
      <HeaderStyle>
        <BootsContainer className="headerWrapper">
          <span className="numbers">480 mln zł dotacji</span>
          <h1 className="title">
            <em className="start">Ma</em>ster<em className="end">projekt</em>
          </h1>
          <p className="subtitle">
            Sporządzamy najwyższej
            <br /> jakości dokumentacje
            <br />
            aplikacyjne
          </p>
        </BootsContainer>
      </HeaderStyle>
    </div>
  );
}
