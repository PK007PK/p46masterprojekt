import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BootsContainer } from '../BootsElements';

const SectionHeroStyles = styled.div`
  background-color: var(--black);
  z-index: -3;
  height: 105vh;
  color: white;
  position: relative;
  margin-top: -101px;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--grey2);
    `}

  ${({ theme }) => theme.media.smAbove} {
    margin-top: -128px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    margin-top: -95px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    max-height: 900px;
  }

  .darkWrapper {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .txtWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .myVideo {
    display: none;

    ${({ theme }) => theme.media.mdAbove} {
      display: block;
      position: absolute;
      z-index: -2;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
    }

    ${({ secondary }) =>
      secondary &&
      css`
        display: none;

        ${({ theme }) => theme.media.mdAbove} {
          display: none;
        }
      `}
  }

  .backgroundImg {
    position: absolute;
    z-index: -2;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .motto {
    margin-top: 100px;
  }

  .title {
    font-size: 35px;
    line-height: 100px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-weight: 800;
    letter-spacing: -0.39px;
    display: block;

    ${({ theme }) => theme.media.smAbove} {
      font-size: 60px;
    }

    ${({ theme }) => theme.media.mdAbove} {
      font-size: 84px;
    }
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
    ${({ theme }) => theme.media.mdAbove} {
      font-size: 20px;
      line-height: 43px;
      letter-spacing: 3px;
    }
  }

  .bottomBar {
    margin-bottom: 50px;
    padding: 40px 0;

    ${({ secondary }) =>
      secondary &&
      css`
        background-color: var(--darkOrange);
        padding: 40px 40px;
      `}
  }
`;

export default function SectionHero({
  videoSrcURL,
  imgSrc,
  bottomBar,
  secondary,
}) {
  const [isMounted, setIsMounted] = useState(false);
  const BottomBar = bottomBar;

  useEffect(() => {
    setTimeout(() => setIsMounted({ isMounted: true }), 150);
  }, []);
  return (
    <SectionHeroStyles secondary={secondary}>
      <div className="darkWrapper" />
      {isMounted && videoSrcURL && (
        <video autoPlay muted loop className="myVideo" aria-hidden="true">
          <source src={videoSrcURL} type="video/mp4" />
        </video>
      )}
      {imgSrc && (
        <GatsbyImage
          className="backgroundImg"
          image={imgSrc}
          placeholder="blurred"
          alt="background image"
          aria-hidden="true"
          formats={['auto', 'webp']}
          quality={50}
        />
      )}
      <BootsContainer className="txtWrapper">
        <div />
        <div className="motto">
          <h1 className="title">
            <em className="start">Ma</em>ster<em className="end">projekt</em>
          </h1>
          <p className="subtitle">
            Sporz??dzamy najwy??szej
            <br /> jako??ci dokumentacje
            <br />
            aplikacyjne
          </p>
        </div>
        <div className="bottomBar">{BottomBar && <BottomBar />}</div>
      </BootsContainer>
    </SectionHeroStyles>
  );
}
