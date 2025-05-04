import { getHeaders } from "../journal/getHeaders.js";

const siteUrl = "https://changhyun.me";

export async function GET() {
  const posts = await getHeaders();

  const items = posts.map((post) => {
    const link = `${siteUrl}/journal/${post.slug}`;
    const pubDate = new Date(post.datetime).toUTCString();
    const description = post.description || "No description available.";
    const thumbnail = post.thumbnail?.startsWith("http")
      ? post.thumbnail
      : `${siteUrl}${post.thumbnail || "/default-thumb.jpg"}`;

    const categories = post.tags?.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n") || "";

    return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${link}</link>
        <guid isPermaLink="true">${link}</guid>
        <pubDate>${pubDate}</pubDate>
        <description><![CDATA[${description}]]></description>
        <author>changhyun@changhyun.me (Changhyun)</author>
        <media:thumbnail url="${thumbnail}" />
        ${categories}
      </item>
    `;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <channel>
    <title>CHANGHYUN.me Journal</title>
    <link>${siteUrl}/journal</link>
    <description>Personal notes, reflections, experiments and dev logs</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>changhyun@changhyun.me (Changhyun)</managingEditor>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
