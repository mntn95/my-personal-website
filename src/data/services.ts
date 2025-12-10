import { Globe, Users, Wrench } from "lucide-react";
import type { Service } from "@/types";

/**
 * Service offerings displayed on homepage and services page
 * Single source of truth for all service information
 */
export const services: Service[] = [
  {
    id: "custom-website-creation",
    icon: Globe,
    title: "Custom Website Creation",
    description:
      "Experienced in crafting fast, attractive websites that converts, from simple pages to full digital platforms.",
    serviceId: "custom-website-creation",
  },
  {
    id: "front-end-collaboration",
    icon: Users,
    title: "Front End Collaboration",
    description:
      "Skilled at working with teams to enhance projects, refine user interfaces, and deliver front-end solutions that keep development running smoothly.",
    serviceId: "front-end-collaboration",
  },
  {
    id: "maintenance-support",
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Focused on maintaining website performance and security, handling updates, optimizations, and troubleshooting to give clients peace of mind.",
    serviceId: "maintenance-support",
  },
];
