import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  padding: 0.5rem 4rem;
  align-items: center;
  width: 100dvw;
  z-index: 1000;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
