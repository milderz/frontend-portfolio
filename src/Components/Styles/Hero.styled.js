import styled from "styled-components";

export const StyledHero = styled.section`
  height: 64.4rem;
  background-color: var(--main-black);

  .hero-content {
    width: 77%;
    margin: auto;
    display: flex;
    height: 100%;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
    @media screen and (max-width: 700px) {
      /* height: 100vh; */
      flex-direction: column;
    }
  }

  .hero-content-left {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      line-height: 1;
      letter-spacing: 3px;

      @media screen and (max-width: 700px) {
        font-size: 3.2rem;
      }
    }

    .line {
      height: 0.4rem;
      width: 17.7rem;
      background-color: var(--yellow);
      margin: 1.6rem 0 8.2rem 0;
      @media screen and (max-width: 700px) {
        margin: 1.6rem 0 4.2rem 0;
      }
    }
  }

  .hero-content-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    .about-title {
      display: flex;
      align-items: center;
      justify-content: start;
      .title-line {
        height: 0.4rem;
        width: 7rem;
        background-color: var(--yellow);
      }
      p {
        font-size: 1.6rem;
        padding-left: 1.8rem;
        color: var(--main-white);
      }
    }

    .about-text {
      h4 {
        padding-bottom: 1.6rem;
        @media screen and (max-width: 700px) {
          font-size: 1.8rem;
        }
      }

      p {
      }
    }

    .more-about {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      :hover {
        text-decoration: underline;
        text-decoration-color: var(--yellow);
      }
      p {
        color: var(--yellow);
        font-size: 1.6rem;
      }

      svg {
        height: 2rem;
        margin-left: 1.6rem;
        color: var(--yellow);
      }
    }

    @media screen and (max-width: 700px) {
      flex: 1;
    }
  }

  .social-links {
    display: flex;
    align-items: center;

    li {
      padding-right: 2rem;
      a {
        :hover {
          svg {
            color: var(--yellow);
            transition: color 0.2s ease;
          }
        }
        svg {
          color: var(--main-white);
          font-size: 2rem;
        }
      }
    }
  }
`;
