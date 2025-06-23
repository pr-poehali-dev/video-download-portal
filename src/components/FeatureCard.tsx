import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  children,
  className = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`halloween-card hover:scale-105 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl pumpkin-glow p-2 rounded-full bg-primary/20">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary font-roboto">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default FeatureCard;
