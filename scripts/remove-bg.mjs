import sharp from 'sharp';

const inputUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-23%20at%2011.49.37%20AM-n785bnHNrlya3FiumHVXY1MHKUYxJd.jpeg';
const outputPath = '/vercel/share/v0-project/public/images/logo.png';

// Download the image
const response = await fetch(inputUrl);
const buffer = Buffer.from(await response.arrayBuffer());

// Get raw pixel data
const image = sharp(buffer);
const { width, height, channels } = await image.metadata();
const rawData = await image.ensureAlpha().raw().toBuffer();

// Process pixels: make light gray background transparent
const threshold = 210;
const nearThreshold = 190;

for (let i = 0; i < rawData.length; i += 4) {
  const r = rawData[i];
  const g = rawData[i + 1];
  const b = rawData[i + 2];

  if (r > threshold && g > threshold && b > threshold) {
    // Background pixel - fully transparent
    rawData[i + 3] = 0;
  } else if (r > nearThreshold && g > nearThreshold && b > nearThreshold) {
    // Near-boundary pixel - partial transparency for anti-aliasing
    const brightness = (r + g + b) / 3;
    const alpha = Math.round(((threshold - brightness) / (threshold - nearThreshold)) * 255);
    rawData[i + 3] = Math.max(0, Math.min(255, alpha));
  }
}

// Save as PNG with transparency, then trim whitespace
await sharp(rawData, { raw: { width, height, channels: 4 } })
  .trim()
  .png()
  .toFile(outputPath);

const info = await sharp(outputPath).metadata();
console.log(`Logo saved with transparent background`);
console.log(`Final size: ${info.width}x${info.height}`);
