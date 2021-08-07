import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Banner } from "../components/Banner"
import Layout from "../components/layout"

const Portfolio = () => {
  const { imageBg } = useStaticQuery(graphql`
    query {
      imageBg: file(relativePath: { eq: "portfolio.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Banner
        imageBg={imageBg}
        section={"Portafolio"}
        title={"Titulo"}
        subtitle={"Subtitulo"}
      />
      <h1>Portafolio</h1>
    </Layout>
  )
}

export default Portfolio
