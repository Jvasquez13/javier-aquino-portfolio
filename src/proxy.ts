import { NextResponse, type NextRequest } from "next/server";
import { LOCALES } from "@/domain/entities/locale";
import { negotiateLocale } from "@/domain/services/negotiate-locale";

/** Sends "/" (and any path without a language prefix) to /es or /en based on the browser's language. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const locale = negotiateLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
