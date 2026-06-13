export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/login") {
      return new Response("lldckv", {
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    const user = url.searchParams.get("user") || "";
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><h1>Привет, ${user}!</h1></body></html>`;
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
