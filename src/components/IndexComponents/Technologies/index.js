import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  SectionTechnologies,
  TextTechnologies,
  TitleTechnologies,
} from "./TechnologiesElements"

export const Technologies = () => {
  return (
    <SectionTechnologies>
      <TitleTechnologies>Tecnologías con las que trabajamos</TitleTechnologies>
      <TextTechnologies>
        Nos mantenemos siempre actualizados con las mejores tecnologías del
        mercado.
      </TextTechnologies>
      <StaticImage
        src="../../../images/technologies.png"
        placeholder="none"
        alt="technologies-drakod"
        width={1000}
      />
    </SectionTechnologies>
  )
}
