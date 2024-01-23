import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

const Img = styled.img`
  height: 20rem;
  border-radius: var(--border-radius-md);
`;

const StyledShowCabin = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-brand-50);
    border-radius: var(--border-radius-sm);
  }
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-400);
    transition: all 0.3s;
  }
  &:hover svg {
    color: var(--color-brand-600);
  }
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ShowCabin({ cabin }) {
  return (
    <StyledShowCabin to={`${cabin.id}`}>
      <Img src={cabin.image} alt="cabin" />
      <InfoDiv>
        <h4>Cabin no: {cabin.name}</h4>
        <p>Price: {formatCurrency(cabin.regularPrice)}</p>
      </InfoDiv>
    </StyledShowCabin>
  );
}

export default ShowCabin;
