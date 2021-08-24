import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BannerHead } from "../components/BannerHead"
import Layout from "../components/layout"
import { HeaderPage } from "../components/HeaderPage"
import { Team } from "../components/HistoryComponents/Team"
import { Banner } from "../components/HistoryComponents/Banner"

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
      <BannerHead
        imageBg={imageBg}
        section={"Nosotros"}
        title={"Somos especialistas en desarrollo"}
        subtitle={"Siempre en constante crecimiento"}
      />
      <HeaderPage
        text="¡DESDE 2020 HEMOS CREADO UN EQUIPO SOLO CON LOS MEJORES, CONÓCENOS!"
        title="El éxito de nuestros clientes es el nuestro"
      />
      <div className="container">
        <Team />
      </div>
      <Banner
        title="¡Estamos en todos lados!"
        text="Al ser una agencia 100% online trabajamos con clientes de todo el mundo, actualmente hemos trabajado con personas de Estado Unidos, Argentina y México. Estamos seguros de que habrá un antes y un después en tu negocio cuando nos conozcamos, porque trabajamos. ¡Solo con los mejores!"
      />
    </Layout>
  )
}

export default History
