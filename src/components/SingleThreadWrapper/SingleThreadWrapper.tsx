import * as React from "react";
import { ISingleThreadData } from "src/store/intefaces";
import OpPostCard from "../OpPostCard/OpPostCard";
import PostCard from "../PostCard/PostCard";

interface ISingleThreadWrapper {
  data: ISingleThreadData;
}

export const SingleThreadWrapper = ({ data }: ISingleThreadWrapper) => (
  <div className="single-thread-wrapper">
    {data.posts.map(post => {
      if (post.is_op_post) {
        return <OpPostCard key={post.num} data={post} />;
      } else {
        return <PostCard key={post.num} data={post} />;
      }
    })}
  </div>
);
