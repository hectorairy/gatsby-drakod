import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Banner } from "../components/Banner"
import Layout from "../components/layout"
import { ServicesPresentation } from "../components/ServicesComponents/ServicesPresentation"
import { ServicesCards } from "../components/ServicesComponents/ServicesCards"

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
        title={"Conquistemos Internet juntos"}
        subtitle={"Haremos que te enamores de tu web"}
      />
      <div className="container">
        <ServicesPresentation />
        <ServicesCards />
      </div>
    </Layout>
  )
}

export default Services
