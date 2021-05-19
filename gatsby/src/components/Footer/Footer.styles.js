import styled from 'styled-components';

export const FooterStyles = styled.footer`
  background-color: var(--darkTxt);
  color: white;
  padding: var(--spacingRegular) 0;

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: white;
  }

  p {
    margin: 0;
  }
`;
