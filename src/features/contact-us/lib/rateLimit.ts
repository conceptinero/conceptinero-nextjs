import { AppError } from "@/lib/AppError";
import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/redis";
import { headers } from "next/headers";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 m"), // 3 requests per minute per IP
});

export async function CheckRequestLimit() {
  const headersList = await headers();
  const ip = (headersList.get("x-forwarded-for") ?? "127.0.0.1")
    .split(",")[0]
    .trim();

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    throw new AppError(
      "You have reached the maximum number of submissions allowed. Please try again later."
    );
  }
}
