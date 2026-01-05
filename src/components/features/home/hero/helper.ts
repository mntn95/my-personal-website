/**
 * Resume filename enum
 * Defines available resume PDF filenames
 */
export enum ResumeFilename {
  FRENCH = "/cv-mathieu-nguyen.pdf",
  ENGLISH = "/cv-mathieu-nguyen-en.pdf",
}

/**
 * Gets the appropriate resume filename based on locale
 *
 * @param locale - The current locale "fr" or "en" enum value
 * @returns The resume filename enum value
 */
export const getResumeFilename = (locale: "fr" | "en"): ResumeFilename => {
  return locale === "fr" ? ResumeFilename.FRENCH : ResumeFilename.ENGLISH;
};
