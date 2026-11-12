import { interpretTranscript } from "@/lib/interpret";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ jev: Boolean(process.env.JEV_API_KEY) });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { transcript?: unknown };
  const transcript = typeof body.transcript === "string" ? body.transcript : "";
  const started = Date.now();
  const result = await interpretTranscript(transcript, {
    apiKey: process.env.JEV_API_KEY,
  });
  return NextResponse.json({
    drinks: result.drinks,
    source: result.source,
    latencyMs: Date.now() - started,
  });
}
