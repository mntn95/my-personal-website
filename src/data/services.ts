import { Globe, Users, Wrench } from "lucide-react";
import type { Service } from "@/types";

/**
 * Service offerings displayed on homepage and services page
 * Single source of truth for all service information
 */
export const services: Service[] = [
  {
    id: "customWebsiteCreation",
    icon: Globe,
    title: "title",
    description: "description",
    serviceId: "custom-website-creation",
  },
  {
    id: "frontEndCollaboration",
    icon: Users,
    title: "title",
    description: "description",
    serviceId: "front-end-collaboration",
  },
  {
    id: "maintenanceSupport",
    icon: Wrench,
    title: "title",
    description: "description",
    serviceId: "maintenance-support",
  },
];
