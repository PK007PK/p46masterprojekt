import React from 'react';
import styled from 'styled-components';

const CardGrantStyles = styled.div`
  position: relative;
  margin-bottom: var(--cardPadding);
  padding: var(--cardPadding);
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  transition: var(--basicTransition);
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.elevation.dp4};
  }
  .company,
  .grant,
  .title {
    font-size: 16px;
    line-height: 1.35;
    margin: 0;
  }

  .title {
    margin: var(--cardPadding) 0;
  }

  .company {
    font-weight: bold;
  }
  .grant {
    color: var(--red);
  }
`;

export default function CardGrant({ title, imgSrc, company, grant }) {
  return (
    <CardGrantStyles>
      <p className="company">{company}</p>
      <h3 className="title">{title}</h3>
      <p className="grant">Dotacja: {grant} zł</p>
    </CardGrantStyles>
  );
}
