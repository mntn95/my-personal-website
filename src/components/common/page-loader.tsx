"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Loader } from "@/components/common/loader";

interface PageLoaderProps {
  children?: React.ReactNode;
}

const PageLoader = ({ children }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return <Loader isVisible={true} />;
  }

  return <>{children}</>;
};

export default PageLoader;
