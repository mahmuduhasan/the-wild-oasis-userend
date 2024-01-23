import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://asdmxrzgtoogybtcarbp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZG14cnpndG9vZ3lidGNhcmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NzEyMzksImV4cCI6MjAyMDU0NzIzOX0.01FfNTX-zannYvi21wXg__OnfhVV7Ik2vWoWMivF5Rw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
