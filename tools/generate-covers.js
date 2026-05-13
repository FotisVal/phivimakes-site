const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = process.cwd();

const PROJECTS_DIR = path.join(ROOT, "public", "projects");
const LOGO_PATH = path.join(ROOT, "public", "branding", "logo.png");

const WIDTH = 1920;
const HEIGHT = 1080;

const BRAND_NAME = "phivimakes";

// Neon ΜΟΝΟ για το πλαίσιο
const FRAME_NEON_1 = "#67e8f9";
const FRAME_NEON_2 = "#22d3ee";

// Flat γαλάζιο για το κείμενο phivimakes, χωρίς neon/glow
const BRAND_FLAT_1 = "#3B82F6";
const BRAND_FLAT_2 = "#22D3EE";

function walk(dir) {
  let results = [];

  if (!fs.existsSync(dir)) {
    return results;
  }

  const list = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of list) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

function findCoverFiles() {
  const allFiles = walk(PROJECTS_DIR);

  return allFiles.filter((file) => {
    const base = path.basename(file).toLowerCase();

    return (
      base === "cover.jpg" ||
      base === "cover.jpeg" ||
      base === "cover.png"
    );
  });
}

async function fileExists(filePath) {
  try {
    await fs.promises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function makeBaseOverlaySvg() {
  return `
  <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow1" cx="18%" cy="18%" r="32%">
        <stop offset="0%" stop-color="rgba(0,217,255,0.18)" />
        <stop offset="100%" stop-color="rgba(0,217,255,0)" />
      </radialGradient>

      <radialGradient id="glow2" cx="82%" cy="78%" r="34%">
        <stop offset="0%" stop-color="rgba(59,130,246,0.14)" />
        <stop offset="100%" stop-color="rgba(59,130,246,0)" />
      </radialGradient>

      <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(2,6,23,0.05)" />
        <stop offset="62%" stop-color="rgba(2,6,23,0.18)" />
        <stop offset="100%" stop-color="rgba(2,6,23,0.72)" />
      </linearGradient>
    </defs>

    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow1)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow2)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fadeBottom)" />
  </svg>
  `;
}

function makeNeonFrameSvg() {
  return `
  <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${FRAME_NEON_1}" />
        <stop offset="100%" stop-color="${FRAME_NEON_2}" />
      </linearGradient>

      <filter id="neonGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="5" result="blur1"/>
        <feGaussianBlur stdDeviation="2" result="blur2"/>
        <feMerge>
          <feMergeNode in="blur1"/>
          <feMergeNode in="blur2"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <rect
      x="38"
      y="38"
      width="${WIDTH - 76}"
      height="${HEIGHT - 76}"
      rx="52"
      fill="none"
      stroke="url(#frameGradient)"
      stroke-width="3"
      filter="url(#neonGlow)"
    />
  </svg>
  `;
}

function createBrandTextSvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brandTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${BRAND_FLAT_1}" />
          <stop offset="100%" stop-color="${BRAND_FLAT_2}" />
        </linearGradient>
      </defs>

      <text
        x="${WIDTH - 70}"
        y="${HEIGHT - 70}"
        text-anchor="end"
        font-family="Arial, Helvetica, sans-serif"
        font-size="54"
        font-weight="800"
        fill="url(#brandTextGradient)"
        letter-spacing="1"
      >
        ${BRAND_NAME}
      </text>
    </svg>
  `);
}

// Αυτό κρατάει το logo ΑΚΡΙΒΩΣ όπως είναι στο public/branding/logo.png
// Δεν του αλλάζει χρώμα, δεν του βάζει gradient, δεν του βάζει neon.
async function createLogoBuffer(logoPath, maxSize = 150) {
  return sharp(logoPath)
    .resize({
      width: maxSize,
      height: maxSize,
      fit: "contain",
      withoutEnlargement: true,
    })
    .png()
    .toBuffer();
}

async function generateOneCover(inputPath) {
  const dir = path.dirname(inputPath);
  const outputPath = path.join(dir, "cover-generated.jpg");

  console.log(`Processing: ${path.relative(ROOT, inputPath)}`);

  const background = await sharp(inputPath)
    .resize(WIDTH, HEIGHT, {
      fit: "cover",
      position: "center",
    })
    .blur(30)
    .modulate({
      brightness: 0.42,
      saturation: 1.14,
    })
    .toBuffer();

  const foreground = await sharp(inputPath)
    .resize(Math.round(WIDTH * 0.82), Math.round(HEIGHT * 0.72), {
      fit: "inside",
      withoutEnlargement: false,
    })
    .toBuffer();

  const fgMeta = await sharp(foreground).metadata();

  const fgLeft = Math.round((WIDTH - fgMeta.width) / 2);
  const fgTop = Math.round((HEIGHT - fgMeta.height) / 2);

  const baseOverlay = Buffer.from(makeBaseOverlaySvg());
  const neonFrame = Buffer.from(makeNeonFrameSvg());
  const brandText = createBrandTextSvg();

  const composites = [
    {
      input: background,
      left: 0,
      top: 0,
    },
    {
      input: Buffer.from(`
        <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="48%" r="45%">
              <stop offset="0%" stop-color="rgba(0,217,255,0.18)" />
              <stop offset="100%" stop-color="rgba(0,217,255,0)" />
            </radialGradient>

            <linearGradient id="vignette" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="rgba(0,0,0,0.25)" />
              <stop offset="50%" stop-color="rgba(0,0,0,0)" />
              <stop offset="100%" stop-color="rgba(0,0,0,0.28)" />
            </linearGradient>
          </defs>

          <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#centerGlow)" />
          <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#vignette)" />
        </svg>
      `),
      left: 0,
      top: 0,
    },
    {
      input: foreground,
      left: fgLeft,
      top: fgTop,
    },
    {
      input: baseOverlay,
      left: 0,
      top: 0,
    },
    {
      input: neonFrame,
      left: 0,
      top: 0,
    },
  ];

  if (await fileExists(LOGO_PATH)) {
    const logo = await createLogoBuffer(LOGO_PATH, 150);
    const logoMeta = await sharp(logo).metadata();

    composites.push({
      input: logo,
      left: 70,
      top: HEIGHT - logoMeta.height - 52,
    });
  } else {
    console.log(
      `Logo not found. Put your logo here: ${path.relative(ROOT, LOGO_PATH)}`
    );
  }

  composites.push({
    input: brandText,
    left: 0,
    top: 0,
  });

  if (await fileExists(outputPath)) {
    await fs.promises.unlink(outputPath);
  }

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: "#020617",
    },
  })
    .composite(composites)
    .jpeg({
      quality: 92,
      progressive: true,
    })
    .toFile(outputPath);

  console.log(`Generated: ${path.relative(ROOT, outputPath)}`);
}

async function run() {
  if (!(await fileExists(PROJECTS_DIR))) {
    throw new Error(`Projects folder not found: ${PROJECTS_DIR}`);
  }

  const covers = findCoverFiles();

  if (covers.length === 0) {
    console.log("No cover files found.");
    return;
  }

  console.log(`Found ${covers.length} cover file(s).`);

  for (const cover of covers) {
    await generateOneCover(cover);
  }

  console.log("Done.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});