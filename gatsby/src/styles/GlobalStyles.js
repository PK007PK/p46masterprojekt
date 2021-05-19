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
    --red2: #FFCCBC;
    --redTransp: rgba(255, 138, 101, 0.3);
    --black: #393939;
    --grey: #8d99ae;
    --gray: var(--grey);
    --grey2: #78909C;
    --darkOrange: rgba(255, 182, 72, 0.8);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: #1000px;
    --darkTxt: #252525;
    --pink: rgb(236, 64, 122);
    --activeTxt: var(--red);
    --active: var(--offWhite);
    --activeTxt: var(--red);
    --deepBlue: #535353;
    
    /* Spacings */
    --spacingSmall: 12px;
    --spacingRegular: 25px;
    --spacingMedium: 40px;
    --spacingLarge: 75px;
    --spacingXXL: 150px;

    --paddingSectionMob: 75px 0px 0px 0px;
    --paddingSection: 150px 0px 0px 0px;
    --paddingInput: 12px 25px;
    --paddingButton: 12px 25px;
    --paddingCard: var(--spacingRegular);


    /* Font sizes */
    --fontSizeXSmall: 12px;
    --fontSizeSmall: 14px;
    --fontSizeRegular: 17px;
    --fontSizeBigX1: 25px;
    --fontSizeBigX2: 40px;
    --fontSizeBigX3: 80px;

    /* FX */
    --transitionFast: 0.3s;
    --transitionBasic: 0.4s;
    --transitionSlow: 0.5s;

    --animationBasic: 0.4s;
    --borderRadiusBasic: 5px;
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
