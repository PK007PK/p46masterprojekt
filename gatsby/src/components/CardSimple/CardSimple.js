import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { CardSimpleStyle } from './CardSimple.styles';

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
