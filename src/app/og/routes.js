
import { ImageResponse } from "next/og";

import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(request) {
  const size = {
    width: 700,
    height: 500,
  };

  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    const fontPath = path.join(process.cwd(), "public", "fonts", "VT323-Regular.ttf");

    if (!fs.existsSync(fontPath)) {
      throw new Error(`Font file not found at: ${fontPath}`);
    }

    const vt323 = fs.readFileSync(fontPath);


    return new ImageResponse(
      (
        <div tw="w-full h-full bg-black text-5xl text-white p-24 flex items-center justify-center text-center relative">
          {title}
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "font",
            data: vt323,
            weight: 400,
            style: "normal",
          },
        ],
      },
    );
  } catch (e) {
    return new Response(`Failed to generate OG Image, ${e}`, { status: 500 });
  }
}
