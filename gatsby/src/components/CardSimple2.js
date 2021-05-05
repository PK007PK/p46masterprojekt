import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';

const CardSimple2Style = styled(Link)`
  display: block;
  height: 330px;
  overflow: hidden;
  position: relative;
  margin-bottom: var(--cardPadding);
  padding: var(--cardPadding);
  padding-top: 0;
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  transition: var(--basicTransition);
  background-color: var(--darkOrange);

  &:hover {
    box-shadow: ${({ theme }) => theme.elevation.dp4};
  }

  .txt {
    z-index: 50;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--cardPadding);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .category,
  .date {
    line-height: 1;
    display: block;
    font-size: var(--smallSize);
  }

  .title {
    font-size: var(--headingSize);
    line-height: 1.3;
  }

  .lead {
    font-size: 18px;
    line-height: 1.3;
  }
`;

export default function CardSimple2({
  style,
  title,
  date,
  link,
  category,
  className,
  lead,
}) {
  return (
    <CardSimple2Style to={link} style={style} className={className}>
      <div className="txt">
        <div>
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="lead">{lead}</p>
        </div>
        <p className="date">{date}</p>
      </div>
    </CardSimple2Style>
  );
}
