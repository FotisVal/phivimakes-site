const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = process.cwd();

const projects = [
  {
    title: "Save Parking",
    category: "Automation Gadgets",
    input: "public/projects/automation-gadgets/SaveParking/cover.jpg",
    output: "public/projects/automation-gadgets/SaveParking/cover-generated.jpg",
  },
  {
    title: "FobKey",
    category: "Mini Cooper",
    input: "public/projects/mini-cooper/fobkey/cover.jpg",
    output: "public/projects/mini-cooper/fobkey/cover-generated.jpg",
  },
  {
    title: "Excalibur",
    category: "Traditional Shaving",
    input: "public/projects/traditional-shaving/excalibur/cover.jpg",
    output: "public/projects/traditional-shaving/excalibur/cover-generated.jpg",
  },
  {
    title: "Double Stand",
    category: "Traditional Shaving",
    input: "public/projects/traditional-shaving/double-stand/cover.jpg",
    output: "public/projects/traditional-shaving/double-stand/cover-generated.jpg",
  },
];

const WIDTH = 1920;
const HEIGHT = 1080;

function escapeXml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function makeOverlaySvg({ title, category }) {
  return `
  <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(2,6,23,0)" />
        <stop offset="100%" stop-color="rgba(2,6,23,0.88)" />
      </linearGradient>

      <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#00d9ff" />
        <stop offset="100%" stop-color="#3b82f6" />
      </linearGradient>

      <filter id="glow">
        <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#bottomFade)" />

    <rect x="42" y="42" width="${WIDTH - 84}" height="${HEIGHT - 84}" rx="54"
      fill="none"
      stroke="rgba(0,217,255,0.55)"
      stroke-width="3"
      filter="url(#glow)"
    />

    <rect x="72" y="${HEIGHT - 230}" width="520" height="74" rx="37"
      fill="rgba(0,217,255,0.13)"
      stroke="rgba(0,217,255,0.55)"
      stroke-width="2"
    />

    <text x="108" y="${HEIGHT - 181}"
      font-family="Arial, Helvetica, sans-serif"
      font-size="34"
      font-weight="800"
      fill="#67e8f9"
      letter-spacing="3">
      ${escapeXml(category).toUpperCase()}
    </text>

    <text x="72" y="${HEIGHT - 82}"
      font-family="Arial, Helvetica, sans-serif"
      font-size="92"
      font-weight="900"
      fill="#ffffff"
      letter-spacing="-2">
      ${escapeXml(title)}
    </text>

    <text x="${WIDTH - 72}" y="${HEIGHT - 82}"
      text-anchor="end"
      font-family="Arial, Helvetica, sans-serif"
      font-size="44"
      font-weight="900"
      fill="#22d3ee">
      phivimakes
    </text>

    <circle cx="${WIDTH - 118}" cy="104" r="42"
      fill="rgba(0,217,255,0.12)"
      stroke="rgba(0,217,255,0.6)"
      stroke-width="3"
      filter="url(#glow)"
    />

    <text x="${WIDTH - 118}" y="120"
      text-anchor="middle"
      font-family="Arial, Helvetica, sans-serif"
      font-size="38"
      font-weight="900"
      fill="#67e8f9">
      3D
    </text>
  </svg>`;
}

async function generateCover(project) {
  const inputPath = path.join(ROOT, project.input);
  const outputPath = path.join(ROOT, project.output);

  if (!fs.existsSync(inputPath)) {
    console.log(`SKIP: Missing input: ${project.input}`);
    return;
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const background = await sharp(inputPath)
    .resize(WIDTH, HEIGHT, {
      fit: "cover",
      position: "center",
    })
    .blur(28)
    .modulate({
      brightness: 0.45,
      saturation: 1.18,
    })
    .toBuffer();

  const foregroundMaxWidth = Math.round(WIDTH * 0.82);
  const foregroundMaxHeight = Math.round(HEIGHT * 0.72);

  const foreground = await sharp(inputPath)
    .resize(foregroundMaxWidth, foregroundMaxHeight, {
      fit: "inside",
      withoutEnlargement: false,
    })
    .toBuffer();

  const fgMeta = await sharp(foreground).metadata();

  const left = Math.round((WIDTH - fgMeta.width) / 2);
  const top = Math.round((HEIGHT - fgMeta.height) / 2 - 50);

  const overlay = Buffer.from(
    makeOverlaySvg({
      title: project.title,
      category: project.category,
    })
  );

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: "#020617",
    },
  })
    .composite([
      { input: background, left: 0, top: 0 },
      {
        input: Buffer.from(`
          <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="45%" r="45%">
                <stop offset="0%" stop-color="rgba(0,217,255,0.28)" />
                <stop offset="100%" stop-color="rgba(0,217,255,0)" />
              </radialGradient>
            </defs>
            <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
          </svg>
        `),
        left: 0,
        top: 0,
      },
      { input: foreground, left, top },
      { input: overlay, left: 0, top: 0 },
    ])
    .jpeg({
      quality: 92,
      progressive: true,
    })
    .toFile(outputPath);

  console.log(`DONE: ${project.output}`);
}

async function run() {
  for (const project of projects) {
    await generateCover(project);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});