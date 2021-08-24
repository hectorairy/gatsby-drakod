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
          en Internet, ya que disponer de la ayuda de un equipo de expertos Web
          es esencial para tu negocio. Yo quiero ayudarte a superar ese miedo y
          poner a tu disposición al mejor equipo del mundo y encontrar juntos el
          éxito de tu negocio »
        </CitaBanner>
        <FooterBanner>
          <StaticImage
            src="../../../images/founder.png"
            placeholder="none"
            css={css`
              margin-top: 1rem;
              border-radius: 50%;
              height: 100px;
              width: 100px;
              object-fit: cover;
              object-position: center;
            `}
            alt="founder-drakod"
          />
          <p>
            <span>Héctor Airy</span>
            <br />
            Fundador de <br />
            DrakoD
          </p>
        </FooterBanner>
      </div>
    </SectionBannerFounder>
  )
}
