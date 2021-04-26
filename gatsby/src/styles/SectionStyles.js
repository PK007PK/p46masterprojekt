import { createGlobalStyle } from 'styled-components';

const SectionStyles = createGlobalStyle`

    .sectionPaddings {
        padding: var(--sectionPaddingMob);

        ${({ theme }) => theme.media.mdAbove} {
            padding: var(--sectionPadding);
        }
    }

`;

export default SectionStyles;
