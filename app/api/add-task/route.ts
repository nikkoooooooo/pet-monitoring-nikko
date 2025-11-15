import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"


export async function POST(req: NextRequest) {
    const { title } = await req.json();


    const { error } = await supabase.from("tasks").insert([{ title }]);


    if (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, {status: 500})
    }

    console.log("done creating new task")
    return NextResponse.json({message: "successfully create a new task"})
}