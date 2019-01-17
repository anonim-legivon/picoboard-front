import * as React from "react";
import { ISingleThreadData } from "src/store/intefaces";
import OpPostCard from "../OpPostCard/OpPostCard";
import PostCard from "../PostCard/PostCard";

interface ISingleThreadWrapper {
  data: ISingleThreadData;
  openFullFileCard: (path: string, width: number, height: number, type: number) => void;
}

export const SingleThreadWrapper = ({ data, openFullFileCard }: ISingleThreadWrapper) => (
  <div className="single-thread-wrapper">
    {data.posts.map(post => {
      if (post.is_op_post) {
        return <OpPostCard openFullFileCard={openFullFileCard} key={post.num} data={post} />;
      } else {
        return <PostCard openFullFileCard={openFullFileCard} key={post.num} data={post} />;
      }
    })}
  </div>
);
