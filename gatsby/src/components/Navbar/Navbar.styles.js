import styled from 'styled-components';

export const MobileMenuStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100vh;
  z-index: 150;
  background-color: black;
  color: white;

  .mobileMenuList {
    margin-top: 100px;
    text-align: center;

    li {
      margin-bottom: 1.5rem;
    }

    a {
      color: white;
    }
  }
`;

export const NavStyle = styled.nav`
  z-index: 200;
  font-size: 1.4rem;
  text-transform: uppercase;

  .logoWrapper {
    margin-top: 8px;
    z-index: 150;
  }

  .desktopMenuList {
    display: none;

    ${({ theme }) => theme.media.mdAbove} {
      display: flex;
      justify-content: flex-end;
      z-index: 150;
    }

    li {
      margin-left: 30px;
    }

    a {
      color: white;
    }
  }

  .burgerButton {
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;

    ${({ theme }) => theme.media.mdAbove} {
      display: none;
    }

    & > * {
      width: 25px;
      height: 25px;
    }
  }

  .menuDesktop {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;
