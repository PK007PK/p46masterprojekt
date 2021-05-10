import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;

  @keyframes intro {
    0% {
      opacity: 0.5;
      top: 55%;
      /* top: 35px; */
    }
    100% {
      opacity: 1;
      margin-bottom: 0px;
      top: 50%;
    }
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* min-width: 600px;
  min-height: 700px; */
    background-color: rgba(0, 0, 0, 0.98);
    border-radius: 5px;
    box-shadow: 8px -5px 25px -10px rgba(0, 0, 0, 0.3);
    z-index: 2000;
    padding: 50px;
    animation: intro 0.4s ease;
  }

  .topWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .title {
    color: white;
    font-size: 25px;
    outline: none;
    border: none;
  }

  .exitButton {
    background-color: rgba(0, 0, 0, 0.98);
    outline: none;
    border: none;

    &:hover .exitIcon,
    &:focus .exitIcon {
      color: var(--darkOrange);
    }
  }

  .exitIcon {
    color: white;
    width: 40px;
    height: 40px;
  }
`;
