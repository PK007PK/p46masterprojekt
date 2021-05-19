import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CardBlogStyles } from './CardBlog.styles';

export default function CardBlog({
  style,
  title,
  date,
  link,
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
          <h3 className="title">{title}</h3>
        </div>
      </div>
    </CardBlogStyles>
  );
}
