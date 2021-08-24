import React from "react"
import {
  TextHeaderPage,
  Separator,
  TitleHeaderPage,
  SectionBannerFounder,
} from "./BannerElements"

export const Banner = ({ text, title }) => {
  return (
    <SectionBannerFounder>
      <div className="container">
        <TitleHeaderPage>{title}</TitleHeaderPage>
        <Separator />
        <TextHeaderPage>{text}</TextHeaderPage>
      </div>
    </SectionBannerFounder>
  )
}
