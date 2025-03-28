import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BannerHead } from "../components/BannerHead"
import Layout from "../components/layout"
import { ServicesList } from "../components/ServicesList"
import { HeaderPage } from "../components/HeaderPage"

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
      <BannerHead
        imageBg={imageBg}
        section={"Servicios"}
        title={"Conquistemos Internet juntos"}
        subtitle={"Haremos que te enamores de tu web"}
      />
      <div className="container">
        <HeaderPage
          text="¡EXPRIMAMOS TODO EL POTENCIAL A TU WEB!"
          title="Nuestros servicios"
        />
        <ServicesList />
      </div>
    </Layout>
  )
}

export default Services
