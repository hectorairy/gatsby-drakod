import React from "react"
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si"
import {
  InfoContainer,
  InfoText,
  InfoTitle,
  Social,
  SocialLink,
} from "./InfoContactElements"

export const InfoContact = () => {
  return (
    <InfoContainer>
      <InfoTitle>¿Necesitas una cotización para tu proyecto?</InfoTitle>
      <InfoText>
        Envíanos toda tu información llenando nuestro formulario, ¡te
        responderemos a la brevedad con una cotización adaptada a tus
        necesidades y presupuesto!
      </InfoText>
      <InfoTitle>Información</InfoTitle>
      <InfoText>
        Si tienes alguna duda, comunicate con nosotros por los siguientes
        medios:
      </InfoText>
      <InfoText>
        Correo:{" "}
        <a href="mailto:info@drakod.com" rel="noreferrer" target="_blank">
          info@drakod.com
        </a>
      </InfoText>
      <InfoTitle>Redes sociales</InfoTitle>
      <InfoText>¡Siguenos en nuestras redes!</InfoText>
      <Social>
        <SocialLink
          href="https://www.facebook.com/DrakodAgency"
          rel="noreferrer"
          target="_blank"
        >
          <SiFacebook />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/drakod_agency/"
          rel="noreferrer"
          target="_blank"
        >
          <SiInstagram />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/company/drakod"
          rel="noreferrer"
          target="_blank"
        >
          <SiLinkedin />
        </SocialLink>
      </Social>
    </InfoContainer>
  )
}
