// /app/api/revalidate/route.ts

import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json();
  const slug = body?.slug?.current;

  try {
    if (slug) {
      revalidatePath(`/blog/${slug}`);
      revalidatePath(`/blog`);
    } else {
      revalidatePath("/");
    }
    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
