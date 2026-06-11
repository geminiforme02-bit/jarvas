// Screenshot helper for the Physio Harpreet site.
// Usage:
//   node screenshot.mjs <url> [label] [scrollFraction]
// Saves to ./temporary screenshots/screenshot-N[-label].png (auto-incremented).
import puppeteer from "puppeteer-core";
import { mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const frac = parseFloat(process.argv[4] || "0");

const OUT_DIR = "temporary screenshots";

async function nextName() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
  const files = await readdir(OUT_DIR).catch(() => []);
  let max = 0;
  for (const f of files) {
    const m = f.match(/^screenshot-(\d+)/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  const n = max + 1;
  return `${OUT_DIR}/screenshot-${n}${label ? "-" + label : ""}.png`;
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--force-color-profile=srgb", "--enable-unsafe-swiftshader"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "load", timeout: 60000 });

await page
  .waitForFunction(() => {
    const l = document.getElementById("loader");
    return l && l.classList.contains("hidden");
  }, { timeout: 60000 })
  .catch(() => console.log("(loader still visible — capturing anyway)"));

if (frac > 0) {
  await page.evaluate((f) => {
    const target = f * (document.body.scrollHeight - window.innerHeight);
    window.scrollTo(0, target);
  }, frac);
  await new Promise((r) => setTimeout(r, 1500));
}

const file = await nextName();
await page.screenshot({ path: file });
console.log("saved " + file + "  (scroll " + Math.round(frac * 100) + "%)");

await browser.close();
