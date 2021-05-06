import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { HiOutlineMenu as Burger } from '@react-icons/all-files/hi/HiOutlineMenu';
import { ImExit as Exit } from '@react-icons/all-files/im/ImExit';
import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';
import { logoCode } from '../assets/logoCode';

const menuData = [
  { id: 0, name: 'Start', link: '/' },
  { id: 1, name: 'Oferta', link: '/oferta' },
  { id: 2, name: 'Blog', link: '/blog/1' },
  { id: 3, name: 'Portfolio', link: '/portfolio' },
  { id: 4, name: 'Kontakt', link: '/kontakt' },
];

const MobileMenuStyle = styled.div`
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

function MobileMenu({ clickBtn }) {
  return (
    <MobileMenuStyle>
      <BootsContainer>
        <BootsRow style={{ paddingTop: '20px' }}>
          <BootsColumn xxs="4" md="2" className="logoWrapper">
            <Link to="/">
              <img
                style={{
                  display: 'block',
                  width: '100px',
                }}
                alt="Masterprojekt Logo"
                src={logoCode}
              />
            </Link>
          </BootsColumn>
          <BootsColumn xxs="8" md="10" className="menuDesktop">
            <button type="button" className="burgerButton" onClick={clickBtn}>
              <Exit style={{ color: 'white', marginTop: '15px' }} />
            </button>
          </BootsColumn>
        </BootsRow>
        <ul className="mobileMenuList">
          {menuData.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </BootsContainer>
    </MobileMenuStyle>
  );
}

const NavStyle = styled.nav`
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

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo2pn" }) {
        childImageSharp {
          gatsbyImageData(formats: [PNG])
        }
      }
    }
  `);

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <NavStyle>
      <BootsContainer>
        <BootsRow style={{ paddingTop: '20px' }}>
          <BootsColumn xxs="4" md="2" className="logoWrapper">
            <Link to="/">
              <img
                style={{ display: 'block', width: '100px' }}
                alt="Masterprojekt Logo"
                src={logoCode}
              />
            </Link>
          </BootsColumn>
          <BootsColumn xxs="8" md="10" className="menuDesktop">
            <ul className="desktopMenuList">
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    activeStyle={{ color: 'rgba(255, 182, 72, 0.8)' }}
                    className="fx-txt-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="burgerButton"
              onClick={handleButtonClick}
            >
              <Burger style={{ color: 'white', marginTop: '15px' }} />
            </button>
            {isOpen && <MobileMenu clickBtn={handleButtonClick} />}
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </NavStyle>
  );
}
