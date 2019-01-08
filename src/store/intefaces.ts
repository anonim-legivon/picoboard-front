export interface IStore {
  categories: ICategories;
}
export interface ICategories {
  loading: boolean;
  data: ICategory[];
  err?: Error;
}
export interface ICategory {
  smth: string;
}
