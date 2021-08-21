import React from "react"
import {
  SectionHeaderPage,
  Separator,
  TextHeaderPage,
  TitleHeaderPage,
} from "./HeaderPageElements"

export const HeaderPage = ({ text, title }) => {
  return (
    <SectionHeaderPage>
      <TextHeaderPage>{text}</TextHeaderPage>
      <Separator />
      <TitleHeaderPage>{title}</TitleHeaderPage>
    </SectionHeaderPage>
  )
}
