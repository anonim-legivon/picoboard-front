// Store Inrefaces

export interface IStore {
  categories: ICategories;
  threads: ICatalog;
  singleThread: ISingleThread;
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
  comment: string;
  num: number;
  parent: number;
  is_op_post: boolean;
  timestamp: string;
  is_deleted: boolean;
  name: string;
  tripcode: string;
  email: string;
  subject?: string;
  sage: boolean;
}
export interface ICatalogPost {
  board: string;
  op_post: IPost | null;
  last_posts?: IPost[];
}
export interface ICatalog {
  data: ICatalogPost[] | null;
  loading: boolean;
  err?: Error;
}
export interface ISingleThread {
  err?: Error;
  loading: boolean;
  data: ISingleThreadData;
}
export interface ISingleThreadData {
  posts: IPost[];
  posts_count: number;
  board: string;
  is_pinned: boolean;
  is_closed: boolean;
  is_deleted: boolean;
  lasthit: string;
}

// Route Interfaces
export interface IBoardPageParameters {
  board: string;
}
export interface IThreadPageParameters extends IBoardPageParameters {
  thread: string;
}
