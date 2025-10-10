interface CardContentProps {
    description: string;
    features: string[];
}

export default function CardContent({ description, features }: CardContentProps) {
    return (
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
    );
}
