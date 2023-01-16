import { CategoriesType } from "./../categories.type";

export interface CategoriesResponse {
    results: (string | CategoriesType)[];
}
