import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ipsovfzpdofpgekcmfiu.supabase.co'; // Ganti dengan Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwc292ZnpwZG9mcGdla2NtZml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MjQ5MDgsImV4cCI6MjA1MjAwMDkwOH0.od4Yyg30OfMtk4iUTT7vCM-XBF5-UsI4VttPX_NsCx8'; // Ganti dengan anon key
export const supabase = createClient(supabaseUrl, supabaseKey);
