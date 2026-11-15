import { GetPortfolio } from "@/application/get-portfolio";
import { StaticPortfolioRepository } from "./static-portfolio-repository";

/** Composition root: the only place where ports are wired to concrete adapters. */
export const getPortfolio = new GetPortfolio(new StaticPortfolioRepository());
