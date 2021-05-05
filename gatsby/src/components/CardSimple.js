import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';

const CardSimpleStyle = styled(Link)`
  display: block;
  background-color: var(--gray);
  height: 330px;
  transition: var(--basicTransition);
  position: relative;
  overflow: hidden;

  .background {
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    transition: var(--basicTransition);
    filter: saturate(30%);
  }

  &:hover .background {
    transform: scale(1.1) rotate(1deg);
  }

  .darkBack {
    z-index: 25;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: var(--basicTransition);
  }

  &:hover .darkBack {
    background-color: rgba(0, 0, 0, 0.95);
  }

  .txt {
    z-index: 50;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--cardPadding);
    color: white;
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

export default function CardSimple({
  style,
  title,
  date,
  link,
  category,
  className,
  imgSrc,
  lead,
}) {
  return (
    <CardSimpleStyle to={link} style={style} className={className}>
      <GatsbyImage
        className="background"
        image={imgSrc}
        placeholder="blurred"
        alt={title}
        formats={['auto', 'webp']}
        quality={50}
      />
      <div className="darkBack" />
      <div className="txt">
        <div>
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="lead">{lead}</p>
        </div>
        <p className="date">{date}</p>
      </div>
    </CardSimpleStyle>
  );
}
