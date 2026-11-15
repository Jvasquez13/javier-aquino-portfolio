import type { Locale } from "@/domain/entities/locale";
import type { Portfolio } from "@/domain/entities/portfolio";
import type { PortfolioRepository } from "@/domain/repositories/portfolio-repository";

export class GetPortfolio {
  constructor(private readonly repository: PortfolioRepository) {}

  execute(locale: Locale): Promise<Portfolio> {
    return this.repository.getPortfolio(locale);
  }
}
