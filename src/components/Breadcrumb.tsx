'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    className?: string;
    customItems?: BreadcrumbItem[];
}

export default function Breadcrumb({ className = '', customItems }: BreadcrumbProps) {
    const pathname = usePathname();

    // Generate breadcrumb items from pathname if no custom items provided
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        if (customItems) return customItems;

        const pathSegments = pathname.split('/').filter(segment => segment !== '');

        const breadcrumbs: BreadcrumbItem[] = [
            { label: 'Home', href: '/' }
        ];

        // Map path segments to readable labels
        const segmentLabels: Record<string, string> = {
            'projects': 'Projects',
            'services': 'Services',
            'contact': 'Contact & About',
            'products': 'Products'
        };

        pathSegments.forEach((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            const label = segmentLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

            breadcrumbs.push({
                label,
                href
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    // Don't show breadcrumbs on home page if only one item
    if (breadcrumbs.length === 1 && pathname === '/') {
        return null;
    }

    return (
        <nav
            className={`flex items-center space-x-2 text-sm text-gray-600 mb-6 ${className}`}
            aria-label="Breadcrumb"
        >
            <ol className="flex items-center space-x-2">
                {breadcrumbs.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && (
                            <svg
                                className="w-4 h-4 mx-2 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}

                        {index === breadcrumbs.length - 1 ? (
                            // Current page (not clickable)
                            <span
                                className="font-medium text-[#0A2540] cursor-default"
                                aria-current="page"
                            >
                                {item.label}
                            </span>
                        ) : (
                            // Clickable link
                            <Link
                                href={item.href}
                                className="hover:text-[#00C2FF] transition-colors duration-200 font-medium"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

// Specialized breadcrumb for specific sections
export function SectionBreadcrumb({
    section,
    subsection,
    className = ''
}: {
    section: string;
    subsection?: string;
    className?: string;
}) {
    const customItems: BreadcrumbItem[] = [
        { label: 'Home', href: '/' },
        { label: section, href: `/${section.toLowerCase()}` }
    ];

    if (subsection) {
        customItems.push({
            label: subsection,
            href: `/${section.toLowerCase()}/${subsection.toLowerCase()}`
        });
    }

    return <Breadcrumb customItems={customItems} className={className} />;
}