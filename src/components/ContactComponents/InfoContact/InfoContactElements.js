import styled from "@emotion/styled"

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 0 auto;
  padding: 3rem;
  border-radius: 2rem;
  background-color: #f6faff;
`

export const InfoTitle = styled.h3`
  color: #8338ec;
  font-weight: 300;
  font-size: 2rem;
`

export const InfoText = styled.p`
  color: #a7a9c0;
  text-align: justify;
  font-size: 1.5rem;

  a {
    color: #00b4d8;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #8338ec;
    }
  }
`

export const Social = styled.div`
  display: flex;
  margin-top: 1rem;
`

export const SocialLink = styled.a`
  font-size: 3rem;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  color: #00b4d8;

  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: #8338ec;
  }
`
