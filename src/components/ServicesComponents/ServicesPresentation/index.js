import React from "react"
import {
  SectionPresentation,
  Separator,
  TextPresentation,
  TitlePresentation,
} from "./ServicesPresentationElements"

export const ServicesPresentation = () => {
  return (
    <SectionPresentation>
      <TextPresentation>
        ¡EXPRIMAMOS TODO EL POTENCIAL A TU WEB!
      </TextPresentation>
      <Separator />
      <TitlePresentation>Nuestros servicios</TitlePresentation>
    </SectionPresentation>
  )
}
