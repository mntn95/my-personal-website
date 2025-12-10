import { Alert } from "@/components/ui";

interface StatusMessagesProps {
	submitStatus: "idle" | "success" | "error";
}

/**
 * Status messages component for contact form
 * Displays success or error alerts based on form submission status
 * Used in the FormFields component
 */
export function StatusMessages({
	submitStatus,
}: StatusMessagesProps): React.ReactElement {
	return (
		<>
			{submitStatus === "success" && (
				<Alert variant="success" className="mt-4">
					Thank you for your message! I&apos;ll get back to you soon.
				</Alert>
			)}
			{submitStatus === "error" && (
				<Alert variant="error" className="mt-4">
					Something went wrong. Please try again later.
				</Alert>
			)}
		</>
	);
}

