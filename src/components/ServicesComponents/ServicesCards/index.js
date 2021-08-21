import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { services } from "../../../data/services"
import { ServiceCard } from "../../ServiceCard"

const ListServices = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const Button = styled(Link)`
  margin: 2rem 2rem 4rem 2rem;
  padding: 1rem 2rem;
  background-color: rgba(0, 180, 216, 1);
  border-radius: 7px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
`

export const ServicesCards = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <ListServices>
        {services.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ListServices>
      <Button to="/contact">Platicanos de tu proyecto</Button>
    </div>
  )
}
