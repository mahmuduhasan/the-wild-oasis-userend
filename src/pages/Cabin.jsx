import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../api/apiCabins";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import ShowCabin from "../features/cabin/ShowCabin";

const StyledCabin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  gap: 2rem;
  margin-top: 1rem;
`;

function Cabin() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;
  return (
    <StyledCabin>
      {cabins.map((cabin) => (
        <ShowCabin key={cabin.id} cabin={cabin} />
      ))}
    </StyledCabin>
  );
}

export default Cabin;
