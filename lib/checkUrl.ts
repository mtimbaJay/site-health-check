export async function checkUrl(url: string) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok ? "Online ✅" : "Offline ❌";
  } catch {
    return "Invalid or blocked ❌";
  }
}