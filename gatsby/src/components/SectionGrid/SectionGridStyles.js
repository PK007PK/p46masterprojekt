import styled from 'styled-components';
import { Link } from 'gatsby';

export const SectionGridStyles = styled.section`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 400px 400px 400px 400px;
    grid-template-areas:
      'prep'
      'obt'
      'fin'
      'serv';
    grid-gap: 20px;

    ${({ theme }) => theme.media.mdAbove} {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 50% 50%;
      grid-template-areas:
        'prep prep serv'
        'obt fin serv';
      grid-gap: 0px;
    }

    ${({ theme }) => theme.media.lgAbove} {
      height: 100vh;
      max-height: 700px;
    }
  }

  .red {
    grid-area: prep;
  }

  .blue {
    grid-area: obt;
  }

  .yellow {
    grid-area: fin;
  }

  .navy {
    grid-area: serv;
  }
`;

export const GridTileStyles = styled(Link)`
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &:focus .txtWrapper {
    background-color: var(--darkTxt) !important;
  }

  &:focus .titleWrapper {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  &:focus .title {
    color: var(--activeTxt) !important;
  }

  &:focus .shortInfo {
    color: white !important;
    opacity: 1 !important;
  }

  .background {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: saturate(30%);
  }

  .txtWrapper {
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: var(--transitionBasic);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      background-color: var(--darkTxt);
    }

    .titleWrapper {
      background-color: rgba(0, 0, 0, 0.5);
      padding: var(--spacingRegular);
      transition: var(--transitionBasic);
    }

    &:hover .titleWrapper {
      background-color: rgba(0, 0, 0, 0);
    }

    .title {
      transition: var(--transitionBasic);
      font-size: var(--fontSizeBigX1);
      font-weight: 600;
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    &:hover .title {
      color: var(--activeTxt);
    }

    .shortInfo {
      transition: var(--basicTransition);
      margin: 0 var(--spacingRegular);
      color: white;
      opacity: 0;
    }

    &:hover .shortInfo {
      color: white;
      opacity: 1;
    }

    .link {
      width: 50px;
      height: 50px;
      background-color: rgba(255, 182, 72, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin: var(--spacingMedium);
    }
  }
`;
