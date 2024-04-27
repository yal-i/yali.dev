import supabase from "../clients/supabase";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { status } = await supabase.from("contact").insert([body]);
  if (status !== 201) {
    throw createError({
      statusCode: 500,
    });
  }
});
