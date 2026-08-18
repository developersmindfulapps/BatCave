import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "The Bat Cave API",
    timestamp: new Date().toISOString(),
  });
}
