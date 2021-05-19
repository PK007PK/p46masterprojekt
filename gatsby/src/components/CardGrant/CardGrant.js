import React from 'react';
import { CardGrantStyles } from './CardGrant.style';

export default function CardGrant({ title, company, grant }) {
  return (
    <CardGrantStyles>
      <p className="company">{company}</p>
      <h3 className="title">{title}</h3>
      <p className="grant">Dotacja: {grant} zł</p>
    </CardGrantStyles>
  );
}
