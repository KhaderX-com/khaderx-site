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
        <nav className={`w-full mb-8 ${className}`} aria-label="Breadcrumb">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center p-4 bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg">
                    <ol className="flex items-center gap-2">
                        {breadcrumbs.map((item, index) => (
                            <li key={item.href} className="flex items-center">
                                {index > 0 && (
                                    <svg
                                        className="w-4 h-4 text-gray-500 mx-3 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
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
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-sm shadow-cyan-400/50"></div>
                                        <span className="font-semibold text-cyan-400 text-sm font-brand" aria-current="page">
                                            {item.label}
                                        </span>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="group flex items-center hover:text-cyan-400 transition-all duration-300 font-medium text-sm font-brand text-gray-300 hover:scale-105"
                                    >
                                        <div className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-cyan-400 rounded-full mr-3 transition-colors duration-300"></div>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
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
