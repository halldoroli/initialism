import { AbbreviationType } from "./abbreviation-type";
import { Category } from "./category";

export interface Entry {
  gameId: string;
  abbreviation: string;
  answer: string;
  abbreviationType: AbbreviationType;
  category: Category;
}
