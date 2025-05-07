import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva2hvYXJlb2JyeWFuYnBwbGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTE2MTMsImV4cCI6MjA2MDIyNzYxM30.23BFrFKsXQc7Y44e6sbLVu1DUbYhLX0qf6KkcXlx4sw"
const supabase = createClient('https://tokhoareobryanbpplcd.supabase.co', SUPABASE_KEY)

export async function signUpUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Error signing up:", error.message);
  } else {
    console.log("User signed up:", data);
  }
}

document.getElementById("signUpButton").addEventListener("click", signUpUser);

