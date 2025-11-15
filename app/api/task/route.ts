// app/api/tasks/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("tasks").select("*"); // fetch all tasks

  if (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data); // send data as JSON
}
