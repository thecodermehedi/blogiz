import { NextResponse } from "next/server"

export const GET = async () => {
 return NextResponse.json({ message: "Hello My First NextJS Server" })
}

export const POST = async (request: Request) => {
 return NextResponse.json({ message: "Data received" });
};

export const PUT = async (request: Request) => {
 return NextResponse.json({ message: "Data updated" });
};

export const PATCH = async (request: Request) => {
 return NextResponse.json({ message: "Data patched" });
};

export const DELETE = async () => {
 return NextResponse.json({ message: "Data deleted" });
};
