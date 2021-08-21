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
      <InfoTitle>¿Necesitas un presupuesto para tu proyecto?</InfoTitle>
      <InfoText>
        En ese caso, puedes enviarnos toda la información que necesitamos,
        fácilmente en 1 minuto, desde nuestro formulario.
      </InfoText>
      <InfoTitle>Información</InfoTitle>
      <InfoText>
        Si necesitas alguna otra información comunicate con nosotros por los
        siguientes medios:
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
          target="_blank"
        >
          <SiFacebook />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/drakod_agency/"
          target="_blank"
        >
          <SiInstagram />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/company/drakod"
          target="_blank"
        >
          <SiLinkedin />
        </SocialLink>
      </Social>
    </InfoContainer>
  )
}
