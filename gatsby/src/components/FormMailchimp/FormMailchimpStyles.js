import styled from 'styled-components';

export const FormMailchimpStyles = styled.div`
  .info {
    margin-bottom: 25px;
    color: white;
  }

  .form {
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
