import styled from 'styled-components';

export const SectionNewsletterStyles = styled.section`
  background-color: var(--darkOrange);
  padding: 80px 0;

  .grid-wrapper {
    grid-gap: var(--spacingMedium);
    display: grid;
    grid-template-columns: 1fr;

    ${({ theme }) => theme.media.smAbove} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 200px;
    }
  }

  .tile {
    padding: var(--spacingRegular);
    box-shadow: ${({ theme }) => theme.elevation.dp1};
    font-size: var(--fontSizeBigX1);
    color: var(--darkTxt);
    display: block;
    border: none;
    text-align: center;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.elevation.dp4};
    }
  }

  .login,
  .newsletter {
    transition: var(--transitionFast);
    position: relative;
    outline: none;
  }

  .login::after,
  .newsletter::after {
    transition: var(--transitionFast);
    content: '';
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: 0;
    right: 0;
    opacity: 0;
  }

  .login:hover::after,
  .login:focus::after,
  .newsletter:hover::after,
  .newsletter:focus::after {
    opacity: 1;
  }

  .newsletter {
    background-color: var(--darkTxt);
    color: var(--offWhite);

    &:after {
      background-color: var(--lightGray);
    }
  }

  .login {
    background-color: var(--lightGray);
    color: black;

    &:after {
      background-color: var(--darkTxt);
    }
  }

  h3 {
    color: white !important;
  }

  .tileWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fontSizeBigX1);
  }

  .icon {
    font-size: var(--fontSizeBigX1);
    margin-right: var(--spacingSmall);
    margin-bottom: 3px;
  }
`;
