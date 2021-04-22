import React, { useState } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import { HiOutlineMenu as Burger } from '@react-icons/all-files/hi/HiOutlineMenu';
import { ImExit as Exit } from '@react-icons/all-files/im/ImExit';
import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';
import Logo from '../assets/logo2.svg';

const NavStyle = styled.nav`
  z-index: 10;
  font-size: 1.4rem;
  text-transform: uppercase;
  .logo {
    svg {
      margin-top: 8px;
      z-index: 110;
    }
  }

  .desktopMenuList {
    display: none;

    ${({ theme }) => theme.media.mdAbove} {
      display: fiex;
      justify-content: flex-end;
    }

    li {
      margin-left: 30px;
    }

    a {
      color: white;
    }
  }

  .mobileButton {
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    border: none;

    ${({ theme }) => theme.media.mdAbove} {
      display: none;
    }

    & > * {
      width: 25px;
      height: 25px;
    }
  }

  .mobileMenu {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100vh;
    z-index: 50;
    background-color: black;
    color: white;
  }

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

  .menuColumn {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const menuData = [
  { id: 0, name: 'O nas', link: '/test' },
  { id: 1, name: 'Dokonania', link: '/test' },
  { id: 2, name: 'Oferta', link: '/test' },
  { id: 3, name: 'Doświadczenie', link: '/test' },
  { id: 4, name: 'Referencje', link: '/test' },
  { id: 5, name: 'Kontakt', link: '/blog/1' },
];

function MobileMenu() {
  return (
    <BootsContainer className="mobileMenu">
      <BootsRow>
        <BootsColumn>
          <ul className="mobileMenuList">
            {menuData.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </BootsColumn>
      </BootsRow>
    </BootsContainer>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
    if (isOpen) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <NavStyle>
      <BootsContainer>
        <BootsRow>
          <BootsColumn xxs="4" md="2">
            <Link to="/" className="logo">
              <Logo />
            </Link>
          </BootsColumn>
          <BootsColumn xxs="8" md="10" className="menuColumn">
            <ul className="desktopMenuList">
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mobileButton"
              onClick={handleClick}
            >
              {isOpen ? (
                <Exit style={{ color: 'white', marginTop: '15px' }} />
              ) : (
                <Burger style={{ color: 'white', marginTop: '15px' }} />
              )}
            </button>
            {isOpen && <MobileMenu />}
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </NavStyle>
  );
}
