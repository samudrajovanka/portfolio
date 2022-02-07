import toBase64 from '@lib/toBase64';

const svg = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#d4d4d4" offset="20%" />
      <stop stop-color="#bdbdbd" offset="50%" />
      <stop stop-color="#d4d4d4" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#d4d4d4" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const shimmer = (w, h) => `data:image/svg+xml;base64,${toBase64(svg(w, h))}`;

export default shimmer;
