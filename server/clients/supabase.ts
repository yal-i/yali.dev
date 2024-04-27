import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();

const supabase = createClient(config.supabaseUrl, config.supabaseKey);

export default supabase;
