import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    //getting the name, email and password from the request body
    const { name, email, password } = await req.json(); // await becuase it will return a promise
    console.log("name", name, "email", email, "password", password);
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
