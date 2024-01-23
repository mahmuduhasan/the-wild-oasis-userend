import styled from "styled-components";

const Img = styled.img`
  height: 6rem;
`;

function Logo() {
  return <Img src="./logo-light.png" alt="herologo" />;
}

export default Logo;
