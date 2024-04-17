import { Marvel } from "src/app/models/marvel.model";

export interface HeroState {
  heroes: Marvel[];
  selectedHero: Marvel | null;
  error: Error | null;
  additionalGptInfo: string | null;
}
