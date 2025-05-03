import Head from "next/head";
import info from "@/app/info.config.js";

const Metadata = ({ pagename, href, type = "website", locale = "en_US" }) => {
  const title = pagename ? `${pagename} | ${info.title}` : info.title;
  const description = info.description;
  const url = href || info.url;
  const image = info.image;
  const imageAlt = info.image_alt;

  return (
    <Head>
      {/* 기본 메타 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={info.keywords} />
      <meta name="robots" content={info.robots} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content={info.theme_color} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={info.opengraph?.site_name || info.title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={info.twitter?.card || "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content={info.twitter?.site} />
      <meta name="twitter:creator" content={info.twitter?.creator} />

      {/* 저자 정보 (선택) */}
      <meta name="author" content={info.author} />
      <meta name="email" content={info.author_email} />
    </Head>
  );
};

export default Metadata;
