import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  structuredData,
}) => {
  const fullTitle = title.includes("Dr. Sarah Mitchell")
    ? title
    : `${title} | Dr. Sarah Mitchell`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Dr. Sarah Mitchell" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Dr. Sarah Mitchell" />
      <meta property="og:locale" content="en_AU" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="dns-prefetch" href="https://images.pexels.com" />
    </Helmet>
  );
};

export default SEOHead;
