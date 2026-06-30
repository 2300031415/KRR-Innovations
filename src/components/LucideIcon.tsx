import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = "", size }) => {
  // Resolve the icon component from all imported Lucide icons
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default fallback icon if the specified name doesn't exist
    const Fallback = Icons.HelpCircle;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};

export default LucideIcon;
