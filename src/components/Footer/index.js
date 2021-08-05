import React from "react"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si"
import {
  ContainerFooter,
  ExternalLink,
  ExternalLinks,
  MainContainerFooter,
} from "./FooterElements"

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background: rgb(34, 32, 16);

          margin-top: 5rem;
          padding: 1rem;

          p {
            text-align: justify;
            margin-top: 1rem;
          }
        `}
      >
        <MainContainerFooter>
          <ContainerFooter>
            <h2>#SOMOSDRAKOD</h2>
            <p>
              Una Agencia digital que integra el arte y la tecnología para
              brindarte soluciones efectivas.
            </p>
          </ContainerFooter>
          <ContainerFooter>
            <StaticImage
              src="../../images/logo-drakod.png"
              placeholder="none"
              alt="logo-drakod"
              width={300}
            />
            <p>Aviso legal | Política de privacidad | Cookies</p>
          </ContainerFooter>
          <ContainerFooter>
            <h2>Siguenos en nuestras redes sociales</h2>
            <ExternalLinks>
              <ExternalLink
                href="https://www.facebook.com/DrakodAgency"
                target="_blank"
              >
                <SiFacebook />
              </ExternalLink>
              <ExternalLink
                href="https://www.instagram.com/drakod_agency/"
                target="_blank"
              >
                <SiInstagram />
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/company/drakod"
                target="_blank"
              >
                <SiLinkedin />
              </ExternalLink>
            </ExternalLinks>
          </ContainerFooter>
        </MainContainerFooter>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #ffffff;
          background-color: rgb(0, 0, 0);
          margin: 0;
          font-size: 1.3rem;
          padding: 1rem;
        `}
      >
        Copyright &copy; 2020 - {year} DrakoD | Todos los derechos reservados.
      </p>
    </>
  )
}
