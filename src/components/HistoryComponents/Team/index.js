import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Teammate } from "../Teammate"
import { team } from "../../../data/team"

const ListTeam = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

export const Team = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <ListTeam>
        {team.map(teammate => (
          <Teammate key={teammate.id} {...teammate} />
        ))}
      </ListTeam>
    </div>
  )
}
