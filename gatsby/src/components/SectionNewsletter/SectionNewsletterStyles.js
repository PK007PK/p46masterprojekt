import styled from 'styled-components';

export const SectionNewsletterStyles = styled.section`
  margin: 100px 0 0;
  background-color: var(--darkOrange);
  padding: 100px 0;

  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px;
    grid-gap: 33px;
  }

  .tile {
    display: block;
    border: none;
    padding: var(--cardPadding);
    text-align: center;
    font-size: 16px;
    box-shadow: ${({ theme }) => theme.elevation.dp1};
    transition: var(--basicTransition);
    font-size: var(--headingSize);
    font-weight: bold;
    color: var(--darkTxt);

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.elevation.dp4};
    }
  }

  .login,
  .newsletter {
    position: relative;
    outline: none;
    transition: var(--basicTransition);
  }

  .login::after,
  .newsletter::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: 0;
    right: 0;
    transition: var(--basicTransition);
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
`;
