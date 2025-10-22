// app/privacy/page.jsx
import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import PageHeader from "@/components/ui/PageHeader";
import Header from "@/components/ui/Header";

{/* Metadata */}
import info from "@/app/info.config.js";

export const generateMetadata = () => {
  return {
    title: `Privacy Policy: ${info.title}`,
    description: "Personal data collection and privacy policy for changhyun.me",
    keywords: info.keywords,
    robots: info.robots,
    copyright: info.copyright,
    authors: [{ name: info.author, url: `mailto:${info.author_email}` }],
    openGraph: {
      title: `Privacy Policy: ${info.title}`,
      description: "Personal data collection and privacy policy",
      url: `${info.opengraph.url}/privacy`,
      siteName: info.opengraph.site_name || info.title,
      images: [
        {
          url: info.opengraph.image,
          alt: info.opengraph.image_alt,
        },
      ],
      locale: info.opengraph.locale,
      type: info.opengraph.type,
    },
    twitter: {
      card: info.twitter.card,
      title: `Privacy Policy: ${info.title}`,
      description: "Personal data collection and privacy policy",
      creator: info.twitter.creator,
      images: [info.twitter.image],
    },
    metadataBase: new URL("https://changhyun.me/privacy"),
  };
};

{/* Page Start */}

export default function PrivacyPage() {
  return (
    <ContentWrapper>
      <ContentBody>
        <PageHeader>Privacy Policy</PageHeader>

        <div className="space-y-6 text-text/80 leading-relaxed">
          <section>
            <Header depth={2}>Data Collection Notice</Header>
            <p className="mt-3">
              This website collects minimal personal information to provide services and respond to inquiries.
              Your privacy is important, and we are committed to protecting your personal data.
            </p>
          </section>

          <section>
            <Header depth={2}>Information We Collect</Header>
            <div className="mt-3 space-y-3">
              <div>
                <Header depth={3}>1. Contact Form</Header>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>Name:</strong> To identify who is contacting me</li>
                  <li><strong>Email Address:</strong> To respond to your inquiry</li>
                  <li><strong>Subject & Message:</strong> To understand your inquiry</li>
                </ul>
              </div>

              <div>
                <Header depth={3}>2. Visitor Analytics</Header>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>IP Address & Location:</strong> General geographic information (city, region, country)</li>
                  <li><strong>Browser Information:</strong> User agent, platform, language</li>
                  <li><strong>Device Information:</strong> Screen size, timezone</li>
                  <li><strong>Visit Information:</strong> Referrer URL, current page URL</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <Header depth={2}>Purpose of Collection</Header>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
              <li>To respond to contact form inquiries</li>
              <li>To understand visitor demographics and improve website experience</li>
              <li>To monitor website traffic and performance</li>
            </ul>
          </section>

          <section>
            <Header depth={2}>Data Storage & Retention</Header>
            <p className="mt-3">
              Contact form submissions are sent to me via Pushover notification service and are retained for up to
              <strong> 1 year</strong> unless you request deletion.
            </p>
            <p className="mt-2">
              Visitor analytics data is stored temporarily for monitoring purposes and automatically expires
              within <strong>30 days</strong>.
            </p>
          </section>

          <section>
            <Header depth={2}>Third-Party Services</Header>
            <p className="mt-3">
              This website uses the following third-party services:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Vercel Analytics:</strong> Anonymous website performance monitoring</li>
              <li><strong>Pushover:</strong> Notification delivery for contact forms and visitor tracking</li>
              <li><strong>ipapi.co:</strong> IP-based geolocation service</li>
            </ul>
          </section>

          <section>
            <Header depth={2}>Your Rights</Header>
            <p className="mt-3">You have the right to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Refuse consent:</strong> You may choose not to use the contact form</li>
              <li><strong>Request deletion:</strong> Contact me to delete your submitted information</li>
              <li><strong>Access your data:</strong> Request what information we have about you</li>
            </ul>
            <p className="mt-3 text-sm text-text/60">
              Note: Refusing consent may restrict access to certain services (e.g., contact form).
            </p>
          </section>

          <section>
            <Header depth={2}>Contact for Privacy Inquiries</Header>
            <p className="mt-3">
              If you have questions about this privacy policy or wish to exercise your rights,
              please contact me via the <a href="/contact" className="underline hover:text-text">contact page</a> or
              email directly at <a href={`mailto:${info.author_email}`} className="underline hover:text-text">{info.author_email}</a>.
            </p>
          </section>

          <section className="text-sm text-text/50 pt-4 border-t border-text/10">
            <p>Last Updated: October 22, 2025</p>
            <p className="mt-1">This policy may be updated periodically. Please check back for changes.</p>
          </section>
        </div>
      </ContentBody>
    </ContentWrapper>
  );
}
