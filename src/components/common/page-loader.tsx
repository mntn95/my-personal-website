"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Loader } from "@/components/common/loader";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <Loader isVisible={isLoading} />;
};

export default PageLoader;
