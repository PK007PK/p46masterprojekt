import React from 'react';
import styled from 'styled-components';

const CardGrantStyles = styled.div`
  position: relative;
  margin-bottom: var(--cardPadding);
  padding: var(--cardPadding);
  padding-top: 0;
`;

export default function CardGrant({ title, imgSrc, company, grant }) {
  return (
    <CardGrantStyles>
      <p className="company">{company}</p>
      <h3 className="title">{title}</h3>
      <p className="grant">Dotacja: {grant}</p>
    </CardGrantStyles>
  );
}
