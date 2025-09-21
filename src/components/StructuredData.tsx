export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "KhaderX",
        "alternateName": "Khader Abueltayef",
        "url": "https://khaderx.com",
        "logo": "https://khaderx.com/images/logo/logo-3-removebg-preview.png",
        "description": "Aerospace Engineer & Python Developer specializing in engineering solutions, aeroelasticity tools, and innovative software development.",
        "foundingDate": "2024",
        "founder": {
            "@type": "Person",
            "name": "Khader Abueltayef",
            "jobTitle": "Aerospace Engineer & Python Developer",
            "email": "contact@khaderx.com",
            "url": "https://khaderx.com",
            "sameAs": [
                "https://github.com/KhaderX-com",
                "https://www.linkedin.com/in/khader-abueltayef-924641301/"
            ]
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@khaderx.com",
            "contactType": "Customer Service",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://github.com/KhaderX-com",
            "https://www.linkedin.com/in/khader-abueltayef-924641301/"
        ],
        "knowsAbout": [
            "Aerospace Engineering",
            "Python Development",
            "Aeroelasticity",
            "Software Development",
            "Engineering Consulting",
            "Technical Solutions"
        ],
        "areaServed": "Worldwide",
        "serviceType": [
            "Aerospace Engineering Consulting",
            "Python Development",
            "Aeroelasticity Analysis",
            "Technical Writing",
            "Custom Software Development"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "KhaderX",
        "url": "https://khaderx.com",
        "description": "Aerospace Engineer & Python Developer specializing in engineering solutions, aeroelasticity tools, and innovative software development.",
        "author": {
            "@type": "Person",
            "name": "Khader Abueltayef"
        },
        "inLanguage": "en-US"
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "KhaderX Engineering Services",
        "url": "https://khaderx.com/services",
        "description": "Professional aerospace engineering consulting, Python development services, aeroelasticity analysis, and custom software solutions.",
        "provider": {
            "@type": "Person",
            "name": "Khader Abueltayef",
            "jobTitle": "Aerospace Engineer & Python Developer"
        },
        "serviceType": [
            "Aerospace Engineering",
            "Python Development",
            "Aeroelasticity Analysis",
            "Technical Consulting",
            "Software Development"
        ],
        "areaServed": "Worldwide"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(professionalServiceSchema)
                }}
            />
        </>
    );
}