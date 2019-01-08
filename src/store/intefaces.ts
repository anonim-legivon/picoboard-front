export interface IStore {
  categories: ICategories;
}
export interface ICategories {
  loading: boolean;
  data: ICategory[];
  err?: Error;
}
export interface ICategory {
  name: string;
  id: string;
  order: number;
  is_hidden: boolean;
  boards: IBoard[];
}
export interface IBoard {
  last_num: number;
  board: string;
  board_name?: string;
  description: string;
  bump_limit: number;
  thread_limit: number;
  filesize_limit: string;
  enable_trips: boolean;
  enable_sage: boolean;
  enable_subject: boolean;
  enable_names: boolean;
  default_name: string;
}
