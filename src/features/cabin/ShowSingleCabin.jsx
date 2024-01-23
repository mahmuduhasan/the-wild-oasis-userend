import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getCabin } from "../../api/apiCabins";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

const Img = styled.img`
  height: 35rem;
  border-radius: var(--border-radius-md);
`;

const StyledShowSingleCabin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  gap: 1rem;
  z-index: 10;
`;

const Span = styled.span`
  font-weight: 600;
`;

const ButtonLink = styled(Link)`
  background: none;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-brand-500);
`;

function ShowSingleCabin() {
  const { id } = useParams();
  const { isLoading, data: cabin } = useQuery({
    queryKey: ["cabin"],
    queryFn: () => getCabin(id),
  });
  if (isLoading) return <Spinner />;
  return (
    <StyledShowSingleCabin>
      <Img src={cabin.image} alt={cabin.name} />
      <DescriptionDiv>
        <h3>Cabin no : {cabin.name}</h3>
        <p>
          <Span>Description : </Span> {cabin.description}
        </p>
        <p>
          <Span>Number of people can stay comfortably : </Span>
          {cabin.maxCapacity} person
        </p>
        <p>
          <Span>Discount : </Span>
          {formatCurrency(cabin.discount)}
        </p>
        <h4>
          <Span>Regular Price :</Span> {formatCurrency(cabin.regularPrice)}
        </h4>
        <ButtonLink to="booking">Book Now</ButtonLink>
      </DescriptionDiv>
    </StyledShowSingleCabin>
  );
}

export default ShowSingleCabin;
