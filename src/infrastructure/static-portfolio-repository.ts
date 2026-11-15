import type { Locale } from "@/domain/entities/locale";
import type { Portfolio } from "@/domain/entities/portfolio";
import type { PortfolioRepository } from "@/domain/repositories/portfolio-repository";
import { portfolioEn } from "./content/portfolio-en";
import { portfolioEs } from "./content/portfolio-es";

const CONTENT: Record<Locale, Portfolio> = { es: portfolioEs, en: portfolioEn };

export class StaticPortfolioRepository implements PortfolioRepository {
  async getPortfolio(locale: Locale): Promise<Portfolio> {
    return CONTENT[locale];
  }
}
