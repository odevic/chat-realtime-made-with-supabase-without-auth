import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "";
const supabasKey = "";

 /* supabase */ 
 
const supabase = createClient(supabaseUrl, supabasKey);

export default supabase;