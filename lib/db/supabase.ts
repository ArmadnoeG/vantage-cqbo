import { createClient } from '@supabase/supabase-js'

export const db = createClient(
	process.env.NEXT_PUBLIC_URL_SUPABASE as string,
	process.env.NEXT_PUBLIC_ANON_KEY_SUPABASE as string
)
