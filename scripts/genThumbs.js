// scripts/generate-thumbnails.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = './public/thumbs';
const destDir = './public/thumbs/temp';
const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

// destDir 없으면 생성 (중첩 디렉토리도 포함)
fs.mkdirSync(destDir, { recursive: true });

fs.readdirSync(srcDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);
  
  if (!supportedFormats.includes(ext)) {
    console.log(`⏩ Skipped unsupported file: ${file}`);
    return;
  }

  const input = path.join(srcDir, file);
  const output = path.join(destDir, file);
  const webpOutput = path.join(destDir, `${baseName}.webp`);

  sharp(input)
    .resize(20)
    .blur()
    .toFile(output)
    .then(() => console.log(`✅ Generated thumbnail for ${file}`))
    .catch(err => console.error(`❌ Error with ${file}: ${err.message}`));

  sharp(input)
    .blur()
    .toFormat('webp')
    .toFile(webpOutput)
    .then(() => console.log(`✅ WebP blurred saved for ${file}`))
    .catch(err => console.error(`❌ Error generating WebP for ${file}: ${err.message}`));
});
