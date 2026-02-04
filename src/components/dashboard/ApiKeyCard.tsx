import { Key, CheckCircle2, AlertCircle, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ApiKeyCardProps {
  name: string;
  category: string;
  isConfigured: boolean;
  lastUsed?: string;
}

export function ApiKeyCard({ name, category, isConfigured, lastUsed }: ApiKeyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200",
        isConfigured
          ? "border-border bg-card hover:border-success/30"
          : "border-destructive/20 bg-destructive/5"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md",
            isConfigured ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
          )}
        >
          <Key className="h-4 w-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-medium">{name}</span>
            {isConfigured ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
            ) : (
              <AlertCircle className="h-3.5 w-3.5 text-destructive" />
            )}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {lastUsed && (
          <span className="text-xs text-muted-foreground">Last used: {lastUsed}</span>
        )}
        <button
          onClick={handleCopy}
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-all hover:bg-muted hover:text-foreground group-hover:opacity-100"
        >
          <Copy className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
