import styled from "@emotion/styled"

export const MainContainerFooter = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 1rem auto 1rem auto;
  color: white;

  @media (min-width: 768px) {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
    }
  }
`

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ExternalLinks = styled.div`
  display: flex;
  margin-top: 1rem;
`

export const ExternalLink = styled.a`
  font-size: 2rem;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: #8338ec;
  }
`
