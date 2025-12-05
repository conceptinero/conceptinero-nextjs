import { redis } from "@/redis";

export async function GET() {
  try {
    await redis.set("cron-ping", Date.now());
    return new Response("Ping OK", { status: 200 });
  } catch (err) {
    console.error("Ping error:", err);
    return new Response("Ping Failed", { status: 500 });
  }
}
