import React from "react"
import { Global, css, useTheme } from "@emotion/react"

export const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: "Poppins", sans-serif;
            background-color: ${theme.background};

            transition: background-color 0.3s ease;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            text-align: center;
            font-family: "Bebas Neue", sans-serif;
          }
          h3 {
            font-family: "Poppins", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            width: 95%;
          }
          img {
            max-width: 100%;
          }
        `}
      />
    </>
  )
}
