import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { HiOutlineMenu as Burger } from '@react-icons/all-files/hi/HiOutlineMenu';
import { ImExit as Exit } from '@react-icons/all-files/im/ImExit';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { BootsColumn, BootsContainer, BootsRow } from '../BootsElements';
import { logoCode } from '../../assets/logoCode';
import { MobileMenuStyle, NavStyle } from './Navbar.styles';

const menuData = [
  { id: 0, name: 'Start', link: '/' },
  { id: 1, name: 'Oferta', link: '/oferta' },
  { id: 2, name: 'Blog', link: '/blog/1' },
  { id: 3, name: 'Portfolio', link: '/portfolio' },
  { id: 4, name: 'Kontakt', link: '/kontakt' },
];

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
              <AniLink
                className="navbar-brand"
                cover
                bg="#1C2331"
                duration={0.4}
                to={item.link}
              >
                {item.name}
              </AniLink>
            </li>
          ))}
        </ul>
      </BootsContainer>
    </MobileMenuStyle>
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

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <NavStyle>
      <BootsContainer>
        <BootsRow style={{ paddingTop: '20px' }}>
          <BootsColumn xxs="4" md="2" className="logoWrapper">
            <AniLink
              className="navbar-brand"
              cover
              bg="#1C2331"
              duration={0.4}
              to="/"
            >
              <img
                style={{ display: 'block', width: '100px' }}
                alt="Masterprojekt Logo"
                src={logoCode}
              />
            </AniLink>
          </BootsColumn>
          <BootsColumn xxs="8" md="10" className="menuDesktop">
            <ul className="desktopMenuList">
              {menuData.map((item) => (
                <li key={item.id}>
                  <AniLink
                    activeStyle={{ color: 'rgba(255, 182, 72, 0.8)' }}
                    className="fx-txt-underline"
                    cover
                    bg="#1C2331"
                    duration={0.4}
                    to={item.link}
                  >
                    {item.name}
                  </AniLink>
                  {/* <Link
                    to={item.link}
                    activeStyle={{ color: 'rgba(255, 182, 72, 0.8)' }}
                    className="fx-txt-underline"
                  >
                    {item.name}
                  </Link> */}
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
