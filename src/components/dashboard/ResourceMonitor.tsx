import { Cpu, MemoryStick, HardDrive, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceItemProps {
  icon: React.ElementType;
  label: string;
  value: number;
  unit: string;
  max: number;
}

function ResourceItem({ icon: Icon, label, value, max, unit }: ResourceItemProps) {
  const percentage = (value / max) * 100;
  const status = percentage < 50 ? "success" : percentage < 80 ? "warning" : "destructive";

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="font-mono text-sm">
          {value}
          <span className="text-muted-foreground">/{max}{unit}</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700",
            status === "success" && "bg-success",
            status === "warning" && "bg-warning",
            status === "destructive" && "bg-destructive"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function ResourceMonitor() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-4 flex items-center gap-2">
        <Activity className="h-4 w-4 text-primary" />
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
          Resource Monitor
        </h3>
      </div>
      <div className="space-y-4">
        <ResourceItem
          icon={Cpu}
          label="AI Tools Active"
          value={2}
          max={2}
          unit=""
        />
        <ResourceItem
          icon={MemoryStick}
          label="Memory Allocated"
          value={3.2}
          max={4}
          unit="GB"
        />
        <ResourceItem
          icon={HardDrive}
          label="Docker Containers"
          value={12}
          max={30}
          unit=""
        />
      </div>
      <div className="mt-4 rounded-md bg-muted/50 px-3 py-2">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-warning">Resource Governor:</span> 45min timeout active
        </p>
      </div>
    </div>
  );
}
