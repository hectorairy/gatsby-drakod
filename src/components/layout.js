import * as React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "@emotion/react"
import { useThemeMode } from "../hooks/useThemeMode"
import { GlobalStyles } from "./GlobalStyles"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const themes = {
  default: {
    background: "#ffffff", // Color de fondo
    surface: "#ffffff", // Color de fondo de tarjetas
    primaryColor: "#8338ec", // Color primario -> Color en rgba rgba(131, 56, 236, 1)
    secondColor: "#00B4D8", // Color secundario -> Color en rgba rgba(0, 180, 216, 1)
    mutedColor: "#a7a9c0", // Color para textos grandes
  },
  dark: {
    background: "#24042c",
    color: "#5e1f5d",
  },
}

const Layout = ({ children }) => {
  const { theme } = useThemeMode()

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Helmet>
          <html lang="es" />
          <title>DrakoD </title>
          <meta charset="utf-8" />
          <meta
            name="description"
            content="Empresa de desarrollo especializada en la creación de páginas web, paquetes con diseño en WordPress, posicionamiento SEO, diseño gráfico, marketing digital y publicidad (Adwords), animación, tiendas en línea y creación de aplicaciones móviles y web hechas a la medida, formada por un equipo de jóvenes que suman sus habilidades para generar soluciones innovadoras, creativas y originales."
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="keywords"
            content="páginas web, paquetes con diseño en WordPress, WordPress, posicionamiento SEO, SEO, diseño gráfico, marketing digital, publicidad, Adwords, animación, tiendas en línea, e-commerce, aplicaciones móviles, app móvil, web a la medida, desarrollo web"
          />
          <meta name="author" content="DrakoD" />

          <meta name="copyright" content="DrakoD" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
