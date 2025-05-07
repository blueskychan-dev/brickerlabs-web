import type { LucideProps } from 'lucide-react';
import React, { type ReactElement } from 'react';
import { cn } from '@/lib/utils';

interface InfoItemProps {
  icon: ReactElement<LucideProps>;
  label: string;
  value: string;
  className?: string;
}

export function InfoItem({ icon, label, value, className }: InfoItemProps) {
  return (
    <div className={cn("flex items-start space-x-3 p-3 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200", className)}>
      <div className="flex-shrink-0 text-accent mt-1">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}
