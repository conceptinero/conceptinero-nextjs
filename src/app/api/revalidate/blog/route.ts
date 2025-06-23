// /app/api/revalidate/route.ts

import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json();
  const slug = body?.slug?.current;

  try {
    // Revalidate cached blog posts data (shared between blog pages and sitemap)
    revalidateTag("blog-posts");

    if (slug) {
      // Revalidate specific blog post and blog index
      revalidatePath(`/blog/${slug}`);
      revalidatePath(`/blog`);
    } else {
      // Revalidate homepage for general updates
      revalidatePath("/");
    }

    // Always revalidate sitemap and robots.txt when blog content changes
    revalidatePath("/sitemap.xml");
    revalidatePath("/robots.txt");

    return NextResponse.json({
      revalidated: true,
      cacheTagsCleared: ["blog-posts"],
      paths: slug
        ? [`/blog/${slug}`, `/blog`, `/sitemap.xml`, `/robots.txt`]
        : [`/`, `/sitemap.xml`, `/robots.txt`],
    });
  } catch (error) {
    console.error("Error revalidating:", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
