import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Banner } from "../components/Banner"
import Layout from "../components/layout"
import { HeaderPage } from "../components/HeaderPage"
import styled from "@emotion/styled"
import { ContactForm } from "../components/ContactComponents/ContactForm"
import { InfoContact } from "../components/ContactComponents/InfoContact"

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

  const Container = styled.div`
    margin: 0 auto;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 2fr 2fr;
      column-gap: 5rem;
    }
  `

  return (
    <Layout>
      <Banner
        imageBg={imageBg}
        section={"Contacto"}
        title={"¿Necesita contactarnos?"}
        subtitle={"Estamos siempre para apoyarte"}
      />
      <div className="container">
        <HeaderPage
          text="¡HABLEMOS DE TU PÁGINA WEB!"
          title="Contacta con nosotros"
        />
        <Container>
          <ContactForm />
          <InfoContact />
        </Container>
      </div>
    </Layout>
  )
}

export default Contact
