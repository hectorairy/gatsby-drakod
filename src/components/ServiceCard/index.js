import React from "react"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"

export const ServiceCard = ({ id, name, description }) => {
  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  const imagenesIconos = iconos.edges
  return (
    <li
      css={css`
        background: #fff;
        box-shadow: 0 0 5px rgba(131, 56, 236, 0.3);
        border-bottom: 3px solid #8338ec;
        border-radius: 6px 6px 6px 6px;
        margin-bottom: 2rem;
        margin-top: 2rem;
      `}
    >
      <div
        css={css`
          padding: 3rem;
          text-align: center;
          p {
            color: #a7a9c0;
            text-align: justify;
          }
        `}
      >
        <img src={imagenesIconos[id - 1].node.publicURL} alt="iconos" />

        <h3
          css={css`
            font-size: 2rem;
            margin-top: 1rem;
          `}
        >
          {name}
        </h3>
        <p>{description}</p>
      </div>
    </li>
  )
}
