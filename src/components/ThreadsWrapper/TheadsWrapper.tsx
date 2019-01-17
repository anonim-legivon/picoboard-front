import * as React from "react";

import { ICatalogPost } from "src/store/intefaces";
import OpPostCard from "../OpPostCard/OpPostCard";
import PostCard from "../PostCard/PostCard";

interface IThreadsWrapperProps {
  data: ICatalogPost[];
  openFullFileCard: (path: string, width: number, height: number, type: number) => void;
}

export const ThreadsWrapper = ({ data, openFullFileCard }: IThreadsWrapperProps) => {
  const threads = (
    <div className="threads-wrapper">
      {data.map((posts, i) => {
        return (
          <div className="catalog-thread" key={i}>
            <OpPostCard openFullFileCard={openFullFileCard} data={posts.op_post} key={i * 100 + 2} />
            {posts.last_posts
              ? posts.last_posts.map((catalogPost, index) => {
                  return <PostCard openFullFileCard={openFullFileCard} key={index} data={catalogPost} />;
                })
              : null}
          </div>
        );
      })}
    </div>
  );
  return threads;
};
