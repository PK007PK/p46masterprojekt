import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const CardBlogStyles = styled(Link)`
  display: grid;
  padding: var(--cardPadding);
  grid-template-rows: 210px;
  grid-template-columns: 310px 1fr;
  grid-gap: var(--cardPadding);
  transition: var(--basicTransition);
  box-shadow: ${({ theme }) => theme.elevation.dp1};

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
    top: calc(var(--cardPadding) / 2);
    left: calc(var(--cardPadding) / 2);
    background-color: var(--darkTxt);
    color: white;
    padding: 3px 15px;
    font-size: 12px;
    transition: var(--basicTransition);
  }

  .txtWrapper {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: var(--headingSize);
    margin: 0;
    line-height: 1.3;
    margin-bottom: 40px;
    transition: var(--basicTransition);
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

export default function CardBlog({
  style,
  title,
  date,
  link,
  category,
  className,
  imgSrc,
}) {
  return (
    <CardBlogStyles to={link} style={style} className={className}>
      <div className="imgWrapper">
        <GatsbyImage
          className="picture"
          image={imgSrc}
          placeholder="blurred"
          alt={title}
          formats={['auto', 'webp']}
          quality={50}
        />
        <div className="date">{date}</div>
      </div>
      <div className="txtWrapper">
        <div>
          <div className="category">Kategoria</div>
          <h3 className="title">{title}</h3>
        </div>
      </div>
    </CardBlogStyles>
  );
}
