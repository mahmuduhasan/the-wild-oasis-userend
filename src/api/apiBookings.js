import supabase from "./supabase";

export async function createBooking(bookingData) {
  console.log(bookingData);
  const { data, error } = await supabase
    .from("bookings")
    .insert([bookingData])
    .select();
  if (error) {
    throw new Error("Booking could not created!");
  }
}
