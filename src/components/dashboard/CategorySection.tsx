import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySectionProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  count?: number;
  children: React.ReactNode;
  className?: string;
}

export function CategorySection({
  title,
  description,
  icon: Icon,
  count,
  children,
  className,
}: CategorySectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
              {title}
              {count !== undefined && (
                <span className="ml-2 text-muted-foreground">({count})</span>
              )}
            </h2>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
