// Store Inrefaces

export interface IStore {
  categories: ICategories;
  threads: ICatalog;
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
export interface IPost {
  comment: React.ReactNode;
  num: number;
  parent: number;
  is_op_post: boolean;
  timestamp: string;
  is_deleted: boolean;
  name: string;
  tripcode: string;
  email: string;
  subject: string;
  sage: boolean;
}
export interface ICatalog {
  data: {
    op_post: IPost | null;
    last_posts: IPost[];
  };
  loading: boolean;
  err?: Error;
}
// Route Interfaces
export interface IBoardPageParameters {
  board: string;
}
