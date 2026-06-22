/**
 * EDEN SURVEYS - Structured Data (JSON-LD)
 * Improves SEO and enables rich snippets
 */

const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Eden Surveyors",
    "alternateName": "Eden Land Surveys Kenya",
    "description": "Registered & approved land surveying services in Kenya offering boundary surveys, topographic mapping, engineering surveys, and GIS analysis. Precision in every measurement.",
    "image": "https://edensurvey.co.ke/assets/images/logo.webp",
    "logo": "https://edensurvey.co.ke/assets/images/logo.webp",
    "url": "https://edensurvey.co.ke",
    "telephone": "+254712345678",
    "email": "info@edensurvey.co.ke",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Malili Town",
        "addressLocality": "Machakos",
        "addressRegion": "Machakos County",
        "postalCode": "90100",
        "addressCountry": "KE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-1.4422",
        "longitude": "37.2571"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
    },
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61589334980556",
        "https://www.linkedin.com/in/muema-alexander-3a130a305?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "https://wa.me/254728803726"
    ],
    "areaServed": [
        {
            "@type": "City",
            "name": "Nairobi"
        },
        {
            "@type": "City",
            "name": "Kiambu"
        },
        {
            "@type": "City",
            "name": "Machakos"
        },
        {
            "@type": "City",
            "name": "Kajiado"
        }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Surveying Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Boundary Survey",
                    "description": "Define property boundaries, beacon placement, and survey reports"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Topographic Survey",
                    "description": "Terrain mapping, elevation contours, and site analysis"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Engineering Survey",
                    "description": "Construction setting out and infrastructure mapping"
                }
            }
        ]
    }
};

// Inject schema into page
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(businessSchema);
document.head.appendChild(script);

// Local business schema for better local SEO
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eden Surveys",
    "image": "https://edensurvey.co.ke/assets/images/logo.webp",
    "@id": "https://edensurvey.co.ke",
    "url": "https://edensurvey.co.ke",
    "telephone": "+254728803726",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Malili Town",
        "addressLocality": "Machakos",
        "addressRegion": "Machakos County",
        "postalCode": "90100",
        "addressCountry": "KE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -1.4422,
        "longitude": 37.2571
    },
    "openingHours": "Mo-Fr 08:00-17:00"
};

const localScript = document.createElement('script');
localScript.type = 'application/ld+json';
localScript.text = JSON.stringify(localBusinessSchema);
document.head.appendChild(localScript);