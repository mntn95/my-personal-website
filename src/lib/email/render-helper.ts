import { render } from "@react-email/render";
import { jsx } from "react/jsx-runtime";
import type { ReactElement } from "react";

/**
 * Renders a React Email component to HTML string
 *
 * @param component - React component to render
 * @param props - Props to pass to the component
 * @returns Rendered HTML string
 * @throws Error if rendering fails
 */
export const renderEmailTemplate = async <T extends Record<string, unknown>>(
  component: (props: T) => ReactElement,
  props: T
): Promise<string> => {
  try {
    return await render(jsx(component, props));
  } catch (error) {
    throw new Error(
      `Failed to render email template: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
