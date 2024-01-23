import styled from "styled-components";

const StyledHome = styled.div`
  height: 80dvh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    background-image: url("./cabins/cabin-007.jpg");
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }
`;

const HeroDiv = styled.div`
  width: 60%;
  padding: 10rem;
`;
const H1 = styled.h1`
  text-align: justify;
`;
const ImgDiv = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Img = styled.img`
  height: 15rem;
  border-radius: var(--border-radius-md);
  transition: 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;

function Home() {
  return (
    <StyledHome>
      <HeroDiv>
        <H1>
          Unlock Your Ideal Getaway: Where Comfort Meets Convenience - Book Your
          Perfect Stay with Us!
        </H1>
      </HeroDiv>
      <ImgDiv>
        <Img src="./cabins/cabin-001.jpg" alt="1" />
        <Img src="./cabins/cabin-002.jpg" alt="2" />
        <Img src="./cabins/cabin-003.jpg" alt="3" />
        <Img src="./cabins/cabin-004.jpg" alt="4" />
      </ImgDiv>
    </StyledHome>
  );
}

export default Home;
