import styled from 'styled-components';
import { Link } from 'gatsby';

export const CardSimpleStyle = styled(Link)`
  display: block;
  background-color: var(--gray);
  transition: var(--transitionBasic);
  height: 330px;
  position: relative;
  overflow: hidden;

  .background {
    transition: var(--transitionBasic);
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    filter: saturate(30%);
  }

  &:hover .background,
  &:focus .background {
    transform: scale(1.1) rotate(1deg);
  }

  .darkBack {
    transition: var(--transitionBasic);
    z-index: 25;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:hover .darkBack,
  &:focus .darkBack {
    background-color: var(--darkTxt);
  }

  .txt {
    padding: var(--spacingRegular);
    z-index: 50;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .category,
  .date {
    line-height: 1;
    display: block;
    font-size: var(--fontSizeSmall);
  }

  .title {
    font-size: var(--fontSizeBigX1);
    line-height: 1.3;
  }

  .lead {
    font-size: var(--fontSizeRegular);
    line-height: 1.3;
  }
`;
