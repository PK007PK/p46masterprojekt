import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { BootsContainer } from './BootsElements';

const SectionAddStyles = styled.section`
  position: relative;
  height: 500px;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* filter: saturate(5%); */
    background-position: bottom;
  }

  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleWrapper {
    /* border-radius: 400px;
    border: 9px solid var(--darkOrange);
    display: inline-block;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 150px; */
  }

  .title {
    margin-top: 250px;
    font-size: 84px;
    line-height: 100px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-weight: 800;
    letter-spacing: -0.39px;
    display: block;
    color: white;
    text-align: center;
    text-transform: uppercase;
  }
`;

export default function SectionAdd() {
  const data = useStaticQuery(graphql`
    {
      together: file(name: { eq: "together2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
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
        alt="Img"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
      />
      <div className="wrapper">
        <BootsContainer>
          <div className="titleWrapper">
            <h2 className="title">Razem po zwycięstwo</h2>
          </div>
        </BootsContainer>
      </div>
    </SectionAddStyles>
  );
}
