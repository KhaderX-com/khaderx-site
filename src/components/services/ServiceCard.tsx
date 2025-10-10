import React from 'react';
import Link from 'next/link';

export interface ServiceCardProps {
    title: string;
    description: string;
    subtitle: string;
    icon: React.ReactNode;
    features: string[];
}

export function ServiceCard({ title, description, subtitle, icon, features }: ServiceCardProps) {
    return (
        <article className="relative h-full">
            <div className="glow-card-static h-full">
                <div className="glow-card-static__inner h-full">
                    <div className="flex flex-col gap-6 flex-grow text-left">
                        <div className="grid grid-cols-[auto,1fr] gap-4">
                            <div className="shrink-0">
                                <span className="glow-icon">
                                    {icon}
                                </span>
                            </div>
                            <div className="space-y-2 text-left">
                                <h3 className="text-2xl font-heading font-semibold text-white">
                                    {title}
                                </h3>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                                    {subtitle}
                                </p>
                            </div>
                            <div className="col-span-2 space-y-4 pt-1 sm:pt-2">
                                <p className="text-sm sm:text-base text-white leading-relaxed">
                                    {description}
                                </p>
                                <ul className="space-y-2 text-sm sm:text-base text-slate-300/90">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(111,0,255,0.4)]"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-3">
                        <Link href="/contact" className="glow-pill">
                            <span>Start Project</span>
                            <span className="text-base leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
