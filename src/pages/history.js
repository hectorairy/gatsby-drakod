import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Banner } from "../components/Banner"
import Layout from "../components/layout"

const History = () => {
  const { imageBg } = useStaticQuery(graphql`
    query {
      imageBg: file(relativePath: { eq: "history.png" }) {
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
        section={"Nosotros"}
        title={"Somos especialistas en desarrollo web "}
        subtitle={"Siempre en constante crecimiento"}
      />
      <h1>Nosotros</h1>
    </Layout>
  )
}

export default History
