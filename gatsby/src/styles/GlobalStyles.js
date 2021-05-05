import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* @font-face {
    font-family: 'roboto';
    src: url('/assets/fonts/Roboto-Medium.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
} */

html {
/* Styling */
    box-sizing: border-box;
    font-size: 10px;

/* Variables:  */
    /* Colors */
    --red: rgba(255, 138, 101, 1);
    --redTransp: rgba(255, 138, 101, 0.3);
    --black: #393939;
    --grey: #8d99ae;
    --gray: var(--grey);
    --darkOrange: rgba(255, 182, 72, 0.8);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: #1000px;
    --darkTxt: #252525;
    --activeTxt: #f26522;

    /* Spacings */
    --sectionPaddingMob: 75px 0px 0px 0px;
    --sectionPadding: 150px 0px 0px 0px;
    --cardPadding: 25px;

    /* Font sizes */
    --smallSize: 14px;
    --headingSize: 25px;
    --leadSizeMob: 30px;
    --leadSize: 40px;

    /* FX */
    --basicTransition: 0.4s;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    line-height: 2;
    font-family: 'Poppins', sans-serif;
}
    
a {
    text-decoration: none;
    color: var(--black);
}

a:hover {
    text-decoration: underline;
}

`;

export default GlobalStyles;
