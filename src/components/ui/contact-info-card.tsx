import React from "react";
import type { LucideIcon } from "lucide-react";
import { IconWrapper } from "@/components/common";
import { cn } from "@/lib/utils";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  target?: "_blank" | undefined;
  rel?: "noopener noreferrer" | undefined;
  className?: string;
}

/**
 * Contact information card component
 * Displays contact details with icon, title, and value
 * Can be used as a link or static display
 *
 * @param icon - Lucide icon component to display
 * @param title - Title/label for the contact information
 * @param value - Contact value (email, address, etc.)
 * @param href - Optional URL to make the card clickable
 * @param target - Link target attribute (defaults to undefined)
 * @param rel - Link rel attribute (defaults to undefined)
 * @param className - Optional additional CSS classes
 *
 * @example
 * <ContactInfoCard
 *   icon={Mail}
 *   title="Email"
 *   value="mathieu.nguyen@proton.me"
 *   href="mailto:mathieu.nguyen@proton.me"
 * />
 */
export const ContactInfoCard = ({
  icon,
  title,
  value,
  href,
  target,
  rel,
  className,
}: ContactInfoCardProps): React.ReactElement => {
  const content = (
    <div
      className={cn(
        "flex items-center p-3 mb-3 bg-card-border/40 rounded-lg hover:bg-card-border/60 transition-colors",
        href && "cursor-pointer",
        className
      )}
    >
      <div className="flex-shrink-0 mr-3">
        <IconWrapper icon={icon} size="sm" />
      </div>
      <div>
        <h3 className="text-sm text-white font-medium">{title}</h3>
        <p className="text-sm text-gray-400">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return content;
};
