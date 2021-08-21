import React from "react"
import { css } from "@emotion/react"

export const Testimonial = ({ position, name, testimonial }) => {
  return (
    <div
      css={css`
        background: #f6faff;
        border-bottom: 3px solid #8338ec;
        padding: 1rem;
        border-radius: 6px 6px 6px 6px;
        margin-bottom: 2rem;
        color: #a7a9c0;
        small {
          color: #8338ec;
        }
      `}
    >
      <p className="muted">"{testimonial}"</p>
      <p>
        - {name} <br />
        <small>{position}</small>
      </p>
    </div>
  )
}
