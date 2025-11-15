import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PATCH(req: NextRequest) {
  const { id, is_complete } = await req.json();

  // Update task status
  const { data, error } = await supabase
    .from("tasks")
    .update({ is_complete })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}
