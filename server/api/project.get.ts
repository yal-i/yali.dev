import supabase from "../clients/supabase";

export default defineEventHandler(async () => {
  const { data } = await supabase.from("project").select("*");
  return data;
});
