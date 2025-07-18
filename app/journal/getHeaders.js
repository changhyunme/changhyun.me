import fs from "fs/promises";
import path from "path";
import { ContentParserFactory } from "../../lib/content-parsers.js";

const contentDir = path.join(process.cwd(), "app/journal/content");

export async function getHeaders() {
  const files = await fs.readdir(contentDir);

  const headers = await Promise.all(
    files.map(async (file) => {
      // .으로 시작하거나 지원하지 않는 파일 형식은 무시
      if (file.startsWith(".") || (!file.endsWith(".json") && !file.endsWith(".md"))) {
        return null;
      }
      
      try {
        const filePath = path.join(contentDir, file);
        const content = await fs.readFile(filePath, "utf-8");
        
        // Use ContentParserFactory to parse both JSON and markdown files
        const parser = ContentParserFactory.createParser(file);
        const parsedContent = await parser.parse(file, content);
        
        return parsedContent;
      } catch (error) {
        console.error(`Error parsing file ${file}:`, error);
        return null;
      }
    })
  );

  // Filter out null values and sort by datetime (newest first)
  return headers
    .filter(Boolean)
    .sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
}
