/**
 * Layout for Apps Hub
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Apps | KhaderX',
    description: 'Explore KhaderX mini apps - AI-powered tools and utilities',
};

export default function AppsHubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
