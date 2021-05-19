import styled from 'styled-components';
import { Link } from 'gatsby';

export const CardBlogStyles = styled(Link)`
  padding: var(--paddingCard);
  grid-gap: var(--spacingRegular);
  transition: var(--transitionBasic);
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  display: grid;
  grid-template-rows: 210px;
  grid-template-columns: 310px 1fr;

  &:hover,
  &:focus {
    background-color: var(--grey2);
    box-shadow: ${({ theme }) => theme.elevation.dp4};
  }

  .imgWrapper {
    position: relative;
  }

  .picture {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .date {
    position: absolute;
    top: var(--spacingSmall);
    left: var(--spacingSmall);
    background-color: var(--darkTxt);
    font-size: var(--fontSizeXSmall);
    transition: var(--basicTransition);
    color: white;
    padding: 3px 15px;
  }

  .txtWrapper {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: var(--headingSize);
    transition: var(--basicTransition);
    margin-bottom: var(--spacingMedium);
    margin: 0;
    line-height: 1.3;
    font-size: var(--fontSizeBigX1);
  }

  :hover .title {
    color: white;
  }

  .category {
    transition: var(--basicTransition);
  }

  :hover .category {
    color: white;
  }
`;
