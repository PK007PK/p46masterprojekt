import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { BootsContainer } from './BootsElements';

const SectionAddStyles = styled.section`
  position: relative;
  height: 500px;
  margin-top: 100px;
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
  }

  .title {
    margin-top: 250px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-weight: 800;
    letter-spacing: -0.39px;
    display: block;
    color: white;
    text-transform: uppercase;
    font-size: 40px;
    line-height: 55px;
    ${({ theme }) => theme.media.mdAbove} {
      font-size: 84px;
      line-height: 100px;
    }
  }
`;

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
