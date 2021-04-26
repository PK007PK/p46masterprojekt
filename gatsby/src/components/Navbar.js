import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { HiOutlineMenu as Burger } from '@react-icons/all-files/hi/HiOutlineMenu';
import { ImExit as Exit } from '@react-icons/all-files/im/ImExit';
import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';
import Logo from '../assets/logo2.svg';

const NavStyle = styled.nav`
  font-size: 1.4rem;
  text-transform: uppercase;

  .logoWrapper {
    z-index: 150;
    margin-top: 8px;
  }

  .desktopMenuList {
    display: none;

    ${({ theme }) => theme.media.mdAbove} {
      display: fiex;
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

  .menuDesktop {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const menuData = [
  { id: 0, name: 'Start', link: '/' },
  { id: 1, name: 'Oferta', link: '/oferta' },
  { id: 2, name: 'Blog', link: '/blog/1' },
  { id: 3, name: 'Portfolio', link: '/portfolio' },
  { id: 4, name: 'Kontakt', link: '/kontakt' },
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
          <BootsColumn xxs="4" md="2" className="logoWrapper">
            <Link to="/">
              <Logo />
              {/* <GatsbyImage
                alt="logo"
                image={data.logo.childImageSharp.gatsbyImageData}
                style={{ marginTop: '10px', width: '142px', height: '58px' }}
              />{' '} */}
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
