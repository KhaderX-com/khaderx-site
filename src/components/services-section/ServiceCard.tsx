import CardHeader from './card/CardHeader';
import CardContent from './card/CardContent';
import CardCTA from './card/CardCTA';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    features: string[];
}

export default function ServiceCard({ title, description, icon, href, features }: CardProps) {
    return (
        <article className="relative h-full">
            <div className="glow-card-static h-full">
                <div className="glow-card-static__inner h-full">
                    <div className="flex flex-col gap-6 flex-grow">
                        <div className="grid grid-cols-[auto,1fr] gap-4 text-left">
                            <CardHeader icon={icon} title={title} />
                            <CardContent description={description} features={features} />
                        </div>
                    </div>
                    <CardCTA href={href} />
                </div>
            </div>
        </article>
    );
}
