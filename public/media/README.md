# Hero drone footage

The current hero uses the supplied Syed Hospital drone footage, converted from animated WebP to a lightweight MP4:

- `public/media/hospital-drone.mp4` (silent H.264 MP4, 608×1080, looping)
- `public/media/hospital-drone-poster.jpg` (poster frame from the supplied footage)
- `public/media/hospital-drone-poster.svg` (illustrated fallback background)

To replace the footage later, put an optimized silent MP4 at `public/media/hospital-drone.mp4` and a matching still at `public/media/hospital-drone-poster.jpg`. The video autoplays muted, inline, and on loop on larger screens. Reduced-motion users and narrow screens see the static fallback.
