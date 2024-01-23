import supabase from "./supabase";

export async function createGuest(guestData) {
  const { data: guest, error } = await supabase
    .from("guests")
    .insert([guestData])
    .select();
  if (error) {
    throw new Error("Guest could not create!");
  }
  console.log(guest[0].id);
  return guest[0].id;
}
