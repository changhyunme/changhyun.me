import fs from "fs/promises";
import path from "path";

const contentDir = path.join(process.cwd(), "app/makes/content");

export async function getHeaders() {
  const files = await fs.readdir(contentDir);

  const headers = await Promise.all(
    files.map(async (file) => {
      // .으로 시작하거나 .json이 아닌 파일은 무시
      if (file.startsWith(".") || !file.endsWith(".json")) return null;
      
      const filePath = path.join(contentDir, file);
      const content = await fs.readFile(filePath, "utf-8");
      return JSON.parse(content);
    })
  );

  return headers.filter(Boolean);
}
