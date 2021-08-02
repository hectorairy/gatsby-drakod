import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

export const ImageBgSection = styled.section`
  margin-top: -80px;
  /* padding-top: 130px; */
  position: relative;
  background-color: #8338ec;
  background: linear-gradient(
    135deg,
    rgba(131, 56, 236, 1) 0%,
    rgba(131, 56, 236, 1) 35%,
    rgba(0, 180, 216, 1) 100%
  );
`

export const ImageBgOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  opacity: 0.1;
  overflow: hidden;
`

export const ImageBg = styled(BackgroundImage)`
  animation: slide_img 40s linear infinite;
  animation-delay: 1s;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat;
  background-size: cover;

  @keyframes slide_img {
    0% {
      transform: translateX(0) translateZ(0);
    }
    50% {
      transform: translateX(-25%) translateZ(0);
    }
    100% {
      transform: translateX(-50%) translateZ(0);
    }
  }
`

export const ImageBgContainer = styled.div`
  color: #ffffff;
  height: calc(100vh);
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
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);

    &.uppercase {
      font-size: 1.4rem;
      text-transform: uppercase;
    }
    @media (min-width: 992px) {
      font-size: 1.4rem;
      &.uppercase {
        font-size: 1.6rem;
        text-transform: uppercase;
      }
    }
  }
`
