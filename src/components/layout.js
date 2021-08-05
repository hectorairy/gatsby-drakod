import * as React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "@emotion/react"
import { useThemeMode } from "../hooks/useThemeMode"
import { GlobalStyles } from "./GlobalStyles"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const themes = {
  default: {
    background: "#ffffff",
    color: "#000000",
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
          <title>DrakoD</title>
          <meta name="description" content="Sitio de bienes raices en Gatsby" />
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
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;700;900&display=swap"
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
