import styled from 'styled-components';

export const SectionAddStyles = styled.section`
  /* margin-top: var(--spacingLarge); */
  position: relative;
  height: 700px;
  margin-bottom: 0;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-position: bottom;
  }

  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleWrapper {
  }

  .title {
    text-align: right;
    margin-top: 250px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-weight: 800;
    letter-spacing: -0.39px;
    display: block;
    color: white;
    text-transform: uppercase;
    font-size: var(--fontSizeBigX2);
    line-height: 1.3;

    ${({ theme }) => theme.media.mdAbove} {
      font-size: var(--fontSizeBigX3);
    }
  }
`;
