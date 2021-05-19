import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { BootsContainer } from '../BootsElements';
import { SectionAddStyles } from './SectionAdd.styles';

export default function SectionAdd() {
  const data = useStaticQuery(graphql`
    {
      together: file(name: { eq: "together2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  return (
    <SectionAddStyles>
      <GatsbyImage
        className="background"
        image={data.together.childImageSharp.gatsbyImageData}
        placeholder="blurred"
        alt="Background img"
        layout="fullWidth"
        formats={['auto', 'webp']}
      />
      <div className="wrapper">
        <BootsContainer>
          <div className="titleWrapper">
            <h2 className="title">wygrywamy konkursy dotacyjne</h2>
          </div>
        </BootsContainer>
      </div>
    </SectionAddStyles>
  );
}
