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
    font-size: var(--leadSizeMob);
  }

  ${({ theme }) => theme.media.mdAbove} {
    font-size: var(--leadSize);
  }

}

.infoTxt {
  color: var(--darkTxt);
  text-align: center;
  line-height: 1.8;
  margin: 25px 0 50px;
  
  ${({ theme }) => theme.media.smAbove} {
    font-size: 16px;  
  }

  ${({ theme }) => theme.media.mdAbove} {
    font-size: 20px;  
  }
}

.activeTxt {
color: var(--activeTxt);
}


`;

export default Typography;
