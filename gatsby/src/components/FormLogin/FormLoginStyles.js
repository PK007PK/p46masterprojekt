import styled from 'styled-components';

export const FormLoginStyles = styled.div`
  color: white;
  width: 100%;

  .info {
    margin-bottom: var(--spacingRegular);
  }

  form {
    input {
      padding: var(--paddingInput);
      width: 100%;
    }

    button {
      padding: var(--paddingButton);
      margin-top: var(--spacingRegular);
      background-color: var(--darkOrange);
      margin-left: auto;
      color: white;
      border: none;
    }
  }
`;
