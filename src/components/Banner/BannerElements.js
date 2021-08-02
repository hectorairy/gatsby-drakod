import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

export const BannerSection = styled.section`
  margin-top: -80px;
  height: 600px;
  position: relative;
  background-color: #8338ec;
  background: linear-gradient(
    135deg,
    rgba(131, 56, 236, 1) 0%,
    rgba(131, 56, 236, 1) 35%,
    rgba(0, 180, 216, 1) 100%
  );
`

export const BannerOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  opacity: 0.2;
  overflow: hidden;
`

export const BannerBg = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
`

export const BannerContainer = styled.div`
  color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 6rem;
    margin: 0%;
    @media (min-width: 992px) {
      font-size: 8rem;
    }
  }
  h1 {
    font-size: 4rem;
    margin: 0%;
    @media (min-width: 992px) {
      font-size: 6rem;
    }
  }
  p {
    font-size: 1.4rem;

    &.uppercase {
      font-size: 1.6rem;
      text-transform: uppercase;
    }
    @media (min-width: 992px) {
      font-size: 1.6rem;
      &.uppercase {
        font-size: 1.8rem;
        text-transform: uppercase;
      }
    }
  }
`
