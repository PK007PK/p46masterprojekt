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
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: #1000px;
    --darkTxt: #252525;
    --activeTxt: #f26522;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.99);

    /* Spacings */
    --sectionPadding: 100px 0px 25px 0px;

    /* Font sizes */
    --leadSize: 40px;

    box-sizing: border-box;
    font-size: 10px;
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
