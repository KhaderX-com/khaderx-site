/**
 * Apps Hub - List of all KhaderX Mini Apps
 * URL: https://apps.khaderx.com
 */

import Link from 'next/link';

export default function AppsHubPage() {
    const apps = [
        {
            id: 'vocab',
            name: 'Business Vocabulary',
            description: 'Generate AI-powered business vocabulary flashcards',
            icon: '📚',
            status: 'In Development',
            webUrl: '/apps/vocab',
            tmaUrl: '/tma/vocab',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">KhaderX Apps</h1>
                    <p className="text-xl text-gray-300">
                        Mini apps powered by AI & innovation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {apps.map((app) => (
                        <div
                            key={app.id}
                            className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all"
                        >
                            <div className="text-4xl mb-4">{app.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                            <p className="text-gray-400 mb-4">{app.description}</p>
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                                    {app.status}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <Link
                                    href={app.webUrl}
                                    className="flex-1 text-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
                                >
                                    Web App
                                </Link>
                                <Link
                                    href={app.tmaUrl}
                                    className="flex-1 text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                                >
                                    Telegram
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
