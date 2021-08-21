import React from "react"
import {
  SectionPresentation,
  TextPresentation,
  TitlePresentation,
} from "./PresentationElements"

export const Presentation = () => {
  return (
    <SectionPresentation>
      <TitlePresentation>
        Diseñamos y damos vida a tu proyecto
      </TitlePresentation>
      <TextPresentation>
        Nos gusta trabajar en colaboración con nuestros clientes para entender
        las necesidades únicas de su empresa y así poder implementar soluciones
        eficientes que le ofrezcan un valor inmensurable.
      </TextPresentation>
    </SectionPresentation>
  )
}
