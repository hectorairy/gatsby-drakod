import React from "react"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Avatar = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0 15px rgba(0, 180, 216, 1);
`

export const Teammate = ({
  id,
  name,
  position,
  secondPosition,
  description,
}) => {
  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "team" } }) {
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
            &.name {
              text-align: center;
              font-size: 1.2rem;
              color: #00b4d8;
            }
            span {
              font-size: 1.6rem;
              font-weight: 600;
              color: #8338ec;
            }
          }
        `}
      >
        <Avatar src={imagenesIconos[id - 1].node.publicURL} alt="iconos" />

        <p className="name">
          <span>{name}</span>
          <br />
          {position}
          <br />
          {secondPosition}
        </p>
        <p>{description}</p>
      </div>
    </li>
  )
}
