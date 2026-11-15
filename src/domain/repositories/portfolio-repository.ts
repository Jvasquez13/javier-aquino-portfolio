import type { Locale } from "../entities/locale";
import type { Portfolio } from "../entities/portfolio";

/** Port: the application depends on this contract, never on where the data lives. */
export interface PortfolioRepository {
  getPortfolio(locale: Locale): Promise<Portfolio>;
}
