"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HomeCardProps {
  className?: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({
  description,
  Icon,
  title,
  className,
  handleClick,
}) => {
  return (
    <section className={cn("home-card", className)} onClick={handleClick}>
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Icon className="h-8 w-8" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
