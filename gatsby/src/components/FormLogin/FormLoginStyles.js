import styled from 'styled-components';

export const FormLoginStyles = styled.div`
  color: white;
  width: 100%;

  .info {
    margin-bottom: 25px;
  }

  form {
    input {
      padding: calc(var(--cardPadding) / 2);
      width: 100%;
    }

    button {
      padding: 10px 20px;
      margin-top: 20px;
      margin-left: auto;
      background-color: var(--darkOrange);
      color: white;
      border: none;
    }
  }
`;
