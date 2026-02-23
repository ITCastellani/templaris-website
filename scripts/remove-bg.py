from PIL import Image
import numpy as np

img = Image.open("/vercel/share/v0-project/scripts/logo-original.jpeg").convert("RGBA")
data = np.array(img)

# The background is light gray (~#f2f2f2). Make pixels that are close to white/light-gray transparent.
# Check if R, G, B are all above a threshold (light gray/white)
r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]

# Background pixels: all channels above 200 and similar to each other (grayish)
threshold = 210
is_bg = (r > threshold) & (g > threshold) & (b > threshold)

# Set alpha to 0 for background pixels
data[is_bg, 3] = 0

# Anti-alias: for pixels near the boundary, blend alpha based on brightness
near_threshold = 190
is_near = (r > near_threshold) & (g > near_threshold) & (b > near_threshold) & ~is_bg
brightness = (r[is_near].astype(float) + g[is_near].astype(float) + b[is_near].astype(float)) / 3
alpha_vals = ((threshold - brightness) / (threshold - near_threshold) * 255).clip(0, 255).astype(np.uint8)
data[is_near, 3] = alpha_vals

result = Image.fromarray(data)

# Crop to content (non-transparent bounding box)
bbox = result.getbbox()
if bbox:
    result = result.crop(bbox)

result.save("/vercel/share/v0-project/public/images/logo.png", "PNG")
print("Logo saved with transparent background")
print(f"Final size: {result.size}")
