import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`


  p, li {
    letter-spacing: 0.5px;
  }


  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  a {
    text-decoration: none !important;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

.leadTxt {
  color: var(--darkTxt);
  text-align: center;
  font-family: 'Merriweather', serif;
  line-height: 1.35;

  ${({ theme }) => theme.media.smAbove} {
    font-size: var(--fontSizeBigX1);
  }

  ${({ theme }) => theme.media.mdAbove} {
    font-size: var(--fontSizeBigX2);
  }

}

.infoTxt {
  color: var(--darkTxt);
  text-align: center;
  line-height: 1.8;
  margin: 25px 0 50px;
  
  ${({ theme }) => theme.media.smAbove} {
    font-size: var(--fontSizeRegular);
  }

  ${({ theme }) => theme.media.mdAbove} {
    font-size: var(--fontSizeBigX1);
  }
}

.activeTxt {
  color: var(--activeTxt);
}

.fx-txt-underline {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--darkOrange);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.1s ease-in-out;
  }     

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  &:focus {
    outline: none !important;
    border: none !important;
  }

  &:focus::before {
    visibility: visible;
    transform: scaleX(1);
  }
}


`;

export default Typography;
