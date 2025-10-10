export default function CardHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <>
            <div className="shrink-0">
                <span className="glow-icon">
                    {icon}
                </span>
            </div>
            <div className="space-y-2 sm:space-y-3 text-left">
                <h3 className="text-2xl font-heading font-semibold text-white">
                    {title}
                </h3>
            </div>
        </>
    );
}
