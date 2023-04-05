//Full subabase config for all react native apps 
import 'react-native-url-polyfill/auto' //npm install react-native-url-polyfill
import { createClient } from '@supabase/supabase-js'//npm install --save @supabase/supabase-js

const supabaseUrl = 'https://ypxsycpvnnvpxllveisf.supabase.co' // your apps URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweHN5Y3B2bm52cHhsbHZlaXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3MzY3NjEsImV4cCI6MTk5NjMxMjc2MX0.5ADkR_TcwbMEf2GfYLx9Mibe80M5dTDpCEoscSQ40OI' //Your api key
export const supabase = createClient(supabaseUrl, supabaseKey)