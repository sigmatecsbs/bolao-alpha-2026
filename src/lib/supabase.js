import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://azoiuclzkzcdlkotjytm.supabase.co'

const supabaseKey = 'sb_publishable_k76Cr-8U7BxmWH5GiOIJPA_18miG3Wm'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)