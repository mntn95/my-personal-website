import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Get Accept-Language header from request
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Detect locale: if language starts with 'fr' (case-insensitive), use 'fr', otherwise default to 'en'
  const locale = acceptLanguage.toLowerCase().startsWith("fr") ? "fr" : "en";

  // Dynamically import messages based on detected locale
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});

