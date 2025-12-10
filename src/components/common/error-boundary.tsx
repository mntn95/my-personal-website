"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch and handle React errors gracefully
 * Prevents entire app from crashing when a component throws an error
 *
 * @example
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to error reporting service (e.g., Sentry)
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
          <div className="max-w-md w-full bg-card-bg border border-card-border rounded-lg p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-red-500/10 p-4 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-white">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We&apos;re sorry, but something unexpected happened. Please try
              refreshing the page or contact support if the problem persists.
            </p>
            {this.state.error && (
              <details className="text-left mb-6 bg-dark-bg-alt p-4 rounded-lg">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2 font-medium">
                  Error Details
                </summary>
                <code className="text-xs text-red-400 break-all">
                  {this.state.error.message}
                </code>
              </details>
            )}
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
              size="md"
              fullWidth
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
