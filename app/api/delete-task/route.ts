import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  // Delete task from Supabase
  const { data, error } = await supabase.from("tasks").delete().eq("task_id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}
