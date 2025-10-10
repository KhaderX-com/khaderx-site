import ServiceCard from './ServiceCard';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    features: string[];
}

interface ServicesGridProps {
    services: CardProps[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <div className="auto-grid-cards">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`animate-fade-in-up-${index + 1}`}
                >
                    <ServiceCard {...service} />
                </div>
            ))}
        </div>
    );
}
