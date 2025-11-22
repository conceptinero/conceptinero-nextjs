export async function verifyCaptcha(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY!;
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await res.json();
  console.log("Captcha verification response:", data);
  if (!data.success) {
    throw new Error("Captcha verification failed");
  }
}
