const { chromium } = require("playwright");
const path = require("path");

async function exportPoster() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: {
      width: 2480,
      height: 3508,
    },
    deviceScaleFactor: 1,
  });

  const posterPath = path.resolve(
    __dirname,
    "save-parking",
    "poster.html"
  );

  const outputPath = path.resolve(
    __dirname,
    "..",
    "public",
    "projects",
    "automation-gadgets",
    "SaveParking",
    "save-parking-poster.png"
  );

  await page.goto(`file://${posterPath}`, {
    waitUntil: "networkidle",
  });

  await page.screenshot({
    path: outputPath,
    fullPage: false,
  });

  await browser.close();

  console.log("Poster exported:");
  console.log(outputPath);
}

exportPoster();