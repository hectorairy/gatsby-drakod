import React from "react"
import Layout from "../components/layout"
import { ImageIndexBG } from "../components/IndexComponents/ImageIndex"
import { Presentation } from "../components/IndexComponents/Presentation"
import { ServicesIndex } from "../components/IndexComponents/ServicesIndex"
import { BannerFounder } from "../components/IndexComponents/BannerFounder"
import { Technologies } from "../components/IndexComponents/Technologies"
import { Testimonials } from "../components/IndexComponents/Testimonials"

const Index = () => {
  return (
    <Layout>
      <ImageIndexBG />
      <div className="container">
        <Presentation />
        <ServicesIndex />
      </div>
      <BannerFounder />
      <div className="container">
        <Technologies />
        <Testimonials />
      </div>
    </Layout>
  )
}

export default Index
