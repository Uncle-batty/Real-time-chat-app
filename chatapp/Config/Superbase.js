import * as SecureStore from "expo-secure-store";
import { createClient } from '@supabase/supabase-js'




const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = 'https://ixspmyudeatzqfgfinux.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4c3BteXVkZWF0enFmZ2ZpbnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3MzA0MTUsImV4cCI6MTk5NjMwNjQxNX0.WjIX_jUFA-dUr8Yrb-vMRfMR-RV_DYQqZCCuQZkjOfg"

export const superbase = createClient(supabaseUrl, supabaseAnonKey)