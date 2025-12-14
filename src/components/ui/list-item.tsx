import React from "react";
import { cn } from "@/lib/utils";

interface ListItemProps {
  children: React.ReactNode;
  icon?: "check" | "arrow" | "bullet" | "custom";
  customIcon?: React.ReactNode;
  className?: string;
}

const iconMap = {
  check: "✓",
  arrow: "▸",
  bullet: "•",
};

/**
 * List item component with consistent styling
 * Supports different icon types (check, arrow, bullet) or custom icons
 *
 * @param children - Content to display in the list item
 * @param icon - Icon type: "check", "arrow", "bullet", or "custom" (default: "bullet")
 * @param customIcon - Custom React node to use as icon when icon="custom"
 * @param className - Optional additional CSS classes
 *
 * @example
 * <ListItem icon="check">Item with checkmark</ListItem>
 * <ListItem icon="arrow">Item with arrow</ListItem>
 * <ListItem icon="bullet">Item with bullet</ListItem>
 * <ListItem icon="custom" customIcon={<CustomIcon />}>Item with custom icon</ListItem>
 */
export const ListItem = ({
  children,
  icon = "bullet",
  customIcon,
  className,
}: ListItemProps): React.ReactElement => {
  return (
    <li className={cn("text-gray-400 flex items-start text-sm", className)}>
      {icon === "custom" && customIcon ? (
        <span className="text-teal-500 mr-2 flex-shrink-0">{customIcon}</span>
      ) : icon !== "custom" ? (
        <span className={cn("text-teal-500 mr-2", "flex-shrink-0")}>
          {iconMap[icon]}
        </span>
      ) : null}
      <span>{children}</span>
    </li>
  );
};
