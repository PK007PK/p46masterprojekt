import { createGlobalStyle } from 'styled-components';

const SectionStyles = createGlobalStyle`

    .sectionPaddings {
        padding: var(--spacingMedium) 0;

        ${({ theme }) => theme.media.mdAbove} {
            padding: var(--spacingLarge) 0;
        }
    }

`;

export default SectionStyles;
