import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  CitaBanner,
  FooterBanner,
  SectionBannerFounder,
} from "./BannerFounderElements"
import { css } from "@emotion/react"

export const BannerFounder = () => {
  return (
    <SectionBannerFounder>
      <div className="container">
        <CitaBanner>
          « Sé que te invaden las dudas sobre cómo puedes mejorar tu estrategia
          en Internet, incluso miedo de equivocarte al elegir el proveedor para
          ello, pero disponer de la ayuda de un equipo de expertos Web es
          esencial para el éxito de tu negocio. Déjame ayudarte a superar esa
          barrera y empezar a obtener resultados. »
        </CitaBanner>
        <FooterBanner>
          <StaticImage
            src="../../../images/home-img.png"
            placeholder="none"
            css={css`
              width: 100px;
              height: 100px;
              border-radius: 50%;
            `}
            alt="founder-drakod"
          />
          <p>
            <span>Héctor Airy</span>
            <br />
            Fundador de Drakod
          </p>
        </FooterBanner>
      </div>
    </SectionBannerFounder>
  )
}
