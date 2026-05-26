import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = resolve(ROOT, "assets/scraped/jjames-original");
const OUT = resolve(ROOT, "public/og");

const OG_W = 1200;
const OG_H = 630;

// route -> source image
const JOBS = [
  { out: "default.webp", src: "jjamesdj1.jpg" },
  { out: "house-pre-sale-painting.webp", src: "jjamesdj4.jpg" },
  { out: "rental-property-repaint.webp", src: "jjamesdj3.jpg" },
  { out: "new-home-purchase-painting.webp", src: "jjamesdj2.jpg" },
  { out: "boutique-house-painting.webp", src: "jjamesdj8.jpg" },
  { out: "about.webp", src: "jjamesdj12.jpg" },
  { out: "for-agents.webp", src: "jjamesdj5.jpg" },
];

await mkdir(OUT, { recursive: true });

for (const job of JOBS) {
  const inPath = resolve(SRC, job.src);
  const outPath = resolve(OUT, job.out);

  const img = sharp(inPath);
  const meta = await img.metadata();

  // Cover-resize to 1200x630, center crop. Use lanczos3 for the upscale,
  // then gentle sharpen + chroma subsampling tweak for crisp social previews.
  const buf = await img
    .resize(OG_W, OG_H, {
      fit: "cover",
      position: "center",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6 })
    .webp({ quality: 82, effort: 6 })
    .toBuffer();

  await sharp(buf).toFile(outPath);
  const outMeta = await sharp(outPath).metadata();
  const sizeKB = Math.round(buf.byteLength / 1024);
  console.log(
    `${job.src.padEnd(18)} (${meta.width}x${meta.height}) -> ${job.out.padEnd(36)} (${outMeta.width}x${outMeta.height}, ${sizeKB}KB)`,
  );
}
