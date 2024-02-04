import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "./lib/i18n";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
