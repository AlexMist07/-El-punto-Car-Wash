import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://xeezefqbwddmlunwnhfe.supabase.co';
const SUPABASE_KEY = 'sb_publishable_25c4a68kG1_4ZpDc4RYvKw_PvfmAqBW';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);