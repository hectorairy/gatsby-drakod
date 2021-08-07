import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Banner } from "../components/Banner"
import Layout from "../components/layout"

const Contact = () => {
  const { imageBg } = useStaticQuery(graphql`
    query {
      imageBg: file(relativePath: { eq: "contact.png" }) {
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
        section={"Contacto"}
        title={"Titulo"}
        subtitle={"Subtitulo"}
      />
      <h1>Contactanos</h1>
    </Layout>
  )
}

export default Contact
