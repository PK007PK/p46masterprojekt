import { useStaticQuery, graphql, Link } from 'gatsby';

import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from './BootsElements';

const GridSectionStyles = styled.section`
  padding: var(--sectionPadding);
  .grid {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'prep prep serv'
      'obt fin serv';
  }

  .red {
    background-color: red;
    grid-area: prep;
  }

  .blue {
    background-color: blue;
    grid-area: obt;
  }

  .yellow {
    background-color: yellow;
    grid-area: fin;
  }

  .navy {
    background-color: navajowhite;
    grid-area: serv;
  }
`;

const GridTileStyles = styled.div`
  padding: 40px;
`;

function GridTile({ title, link }) {
  return (
    <Link to={link}>
      <GridTileStyles>
        <h3>{title}</h3>
      </GridTileStyles>
    </Link>
  );
}

export default function GridSection() {
  const data = useStaticQuery(graphql`
    {
      sanitySiteConfig {
        title
        lang
        description
      }
    }
  `);

  return (
    <GridSectionStyles>
      <BootsContainer>
        <div className="grid">
          <div className="red">
            <GridTile title="Przygotowanie projektów" link="/projekty" />
          </div>
          <div className="blue">
            <GridTile title="Rozliczanie projektów" link="/rozliczanie" />
          </div>
          <div className="yellow">
            <GridTile title="Analizy finansowe" link="/finanse" />
          </div>
          <div className="navy">
            <GridTile title="Stała obsługa" link="/obsluga" />
          </div>
        </div>
      </BootsContainer>
    </GridSectionStyles>
  );
}
