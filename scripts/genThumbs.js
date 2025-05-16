// scripts/generate-thumbnails.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const mime = require('mime-types');
require('dotenv').config({ path: '.env.local' });

const srcDir = './public/thumbs';
const localThumbDir = './public/thumbs/temp';
const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

// R2 설정
const s3 = new S3Client({
    region: 'auto',
    endpoint: process.env.R2_ENDPOINT, // 예: https://<account_id>.r2.cloudflarestorage.com
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY,
        secretAccessKey: process.env.R2_SECRET_KEY,
    }
});
const bucketName = process.env.R2_BUCKET;

// 로컬 디렉토리 없으면 생성
fs.mkdirSync(localThumbDir, { recursive: true });

// S3 업로드 함수
async function uploadToR2(buffer, key, contentType) {
    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: buffer,
        ContentType: contentType,
    });
    await s3.send(command);
    console.log(`☁️ Uploaded to R2: ${key}`);
}

// 처리 함수
async function processFile(file) {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    if (!supportedFormats.includes(ext)) {
        console.log(`⏩ Skipped unsupported file: ${file}`);
        return;
    }

    const inputPath = path.join(srcDir, file);
    const localOutputPath = path.join(localThumbDir, file);
    const webpName = `${baseName}.webp`;

    try {
        // 원본 버퍼 로드
        const inputBuffer = fs.readFileSync(inputPath);
        
        // 원본 파일을 R2에 업로드
        await uploadToR2(inputBuffer, `img/${file}`, mime.lookup(ext) || 'application/octet-stream');

        // 썸네일(JPG) 생성 후 로컬 저장
        await sharp(inputBuffer)
            .resize(20)
            .blur()
            .toFile(localOutputPath);
        console.log(`✅ Local thumbnail generated: ${file}`);

        // WebP 썸네일 생성 및 R2 업로드
        const webpBuffer = await sharp(inputBuffer)
            .blur()
            .toFormat('webp')
            .toBuffer();
        await uploadToR2(webpBuffer, `img/temp/${webpName}`, 'image/webp');
        console.log(`✅ WebP thumbnail uploaded: ${webpName}`);
    } catch (err) {
        console.error(`❌ Error processing ${file}: ${err.message}`);
    }
}

// 메인 실행
async function main() {
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
        await processFile(file);
    }
}

main();
