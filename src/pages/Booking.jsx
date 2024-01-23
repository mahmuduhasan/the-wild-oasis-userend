import { useForm } from "react-hook-form";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { createGuest } from "../api/apiGuests";
import { createBooking } from "../api/apiBookings";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
  width: 100dvw;
  position: absolute;
  top: 0;
  left: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  width: 30%;
  gap: 1rem;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-brand-500);
`;

function Booking() {
  const { id: cabinID } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm();
  async function onSubmitForm(data) {
    const isPaid = data.payment === "payNow";
    const guestData = {
      fullName: data.fullName,
      email: data.email,
      nationalID: data.nationalID,
      nationality: data.nationality,
    };
    const guestID = await createGuest(guestData);

    const extra = data.extraPrice ? 100 : 0;

    const nights =
      new Date(data.endDate).getDate() - new Date(data.startDate).getDate();

    const bookingData = {
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      numNights: nights,
      numGuests: +data.numGuests,
      cabinPrice: nights * 100,
      extrasPrice: extra,
      totalPrice: nights * 100 + extra,
      status: "unconfirmed",
      cabinID: +cabinID,
      guestID: guestID,
      observations: "",
      isPaid,
      hasBreakfast: data.extraPrice,
    };
    createBooking(bookingData);
    navigate("/cabins");
  }
  return (
    <StyledDiv>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Div>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            id="fullName"
            required
            {...register("fullName")}
          />
        </Div>
        <Div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            required
            {...register("email")}
          />
        </Div>
        <Div>
          <label>National ID</label>
          <input
            type="text"
            placeholder="Enter your National ID number"
            id="nationalID"
            required
            {...register("nationalID")}
          />
        </Div>
        <Div>
          <label>Nationality</label>
          <input
            type="text"
            placeholder="Enter your nationality"
            id="nationality"
            required
            {...register("nationality")}
          />
        </Div>
        <Div>
          <label>Number of people: </label>
          <input
            type="number"
            id="numGuests"
            placeholder="How many people you are planning to stay?"
            {...register("numGuests")}
          />
        </Div>
        <Div>
          <label>When will you check-in? </label>
          <input type="date" id="startDate" {...register("startDate")} />
        </Div>
        <Div>
          <label>When will you check-out? </label>
          <input type="date" id="endDate" {...register("endDate")} />
        </Div>
        <Div>
          <label>Cabin no: </label>
          <input type="text" value={cabinID} id="cabinID" disabled />
        </Div>
        <Div>
          <label>Want to include : </label>
          <div>
            <input
              type="checkbox"
              id="extraPrice"
              {...register("extraPrice")}
            />
            Breakfast
          </div>
        </Div>
        <Div>
          <label>Choose a payment option:</label>
          <select id="payment" {...register("payment")}>
            <option value="payOnArrival">Pay on arrival</option>
            <option value="payNow">Pay Now</option>
          </select>
        </Div>
        <Div>
          <Button>Confirm your booking</Button>
        </Div>
      </Form>
    </StyledDiv>
  );
}

export default Booking;
