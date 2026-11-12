import { assemblyaiTokenResponse, mintStreamingToken } from "@/lib/assemblyai-token";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const probe = new URL(request.url).searchParams.get("probe") === "1";
  const result = await assemblyaiTokenResponse({
    apiKey: process.env.ASSEMBLYAI_API_KEY,
    probe,
    mint: mintStreamingToken,
  });
  return NextResponse.json(result.body, {
    status: result.status,
    headers: { "Cache-Control": "no-store" },
  });
}
