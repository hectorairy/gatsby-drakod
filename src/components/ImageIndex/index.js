import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  ImageBg,
  ImageBgOverlay,
  ImageBgSection,
  ImageBgContainer,
} from "./ImageIndexElements"

export const ImageIndexBG = () => {
  const { imageBg } = useStaticQuery(graphql`
    query {
      imageBg: file(relativePath: { eq: "bg-home-overlay.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBgSection>
      <ImageBgOverlay>
        <ImageBg tag="div" fluid={imageBg.sharp.fluid}></ImageBg>
      </ImageBgOverlay>
      <ImageBgContainer>
        <p className="uppercase">Somos DrakoD</p>

        <h1>Integramos Arte y Tecnología</h1>
        <h2>para brindarte soluciones efectivas.</h2>
        <p>Creamos equipos con alma y proyectos con corazón.</p>
        <StaticImage
          src="../../images/home-img.png"
          placeholder="none"
          alt="drakod"
        />
      </ImageBgContainer>
    </ImageBgSection>
  )
}
