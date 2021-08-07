import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Banner } from "../components/Banner"
import Layout from "../components/layout"

const Services = () => {
  const { imageBg } = useStaticQuery(graphql`
    query {
      imageBg: file(relativePath: { eq: "services.png" }) {
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
        section={"Servicios"}
        title={"Titulo"}
        subtitle={"Subtitulo"}
      />
      <h1>Servicios</h1>
    </Layout>
  )
}

export default Services
