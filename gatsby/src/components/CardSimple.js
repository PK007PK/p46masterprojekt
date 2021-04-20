import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';

const CardSimpleStyle = styled(Link)`
  display: block;
  background-color: var(--gray);
  padding: var(--cardPadding);
  min-height: 330px;
  transition: var(--basicTransition);

  &:hover {
    background-color: var(--darkOrange);
    box-shadow: ${({ theme }) => theme.elevation.dp1};
  }

  .category,
  .date {
    line-height: 1;
    color: white;
    display: block;
    font-size: var(--smallSize);
  }

  .title {
    font-size: var(--headingSize);
    line-height: 1.3;
  }

  /* &:hover .category,
  &:hover .date {
    color: var(--activeTxt);
  } */
`;

export default function CardSimple({ title, subtitle, date, link, category }) {
  return (
    <CardSimpleStyle to={link}>
      <p className="category">{category}</p>
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
      <p className="subtitle">{subtitle}</p>
    </CardSimpleStyle>
  );
}
