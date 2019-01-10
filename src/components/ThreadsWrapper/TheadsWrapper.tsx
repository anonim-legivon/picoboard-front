import * as React from "react";

import { IPost } from "src/store/intefaces";
import { OpPostCard } from "../OpPostCard/OpPostCard";
import { PostCard } from "../PostCard/PostCard";

interface IThreadsWrapper {
  data: {
    op_post: IPost | null;
    last_posts: IPost[];
  };
}

export const ThreadsWrapper = ({ data }: IThreadsWrapper) => (
  <div className="threads-wrapper">
    <OpPostCard data={data.op_post} />
    {data.last_posts.map(post => (
      <PostCard
        key={post.num}
        comment={post.comment}
        num={post.num}
        parent={post.parent}
        timestamp={post.timestamp}
        is_deleted={post.is_deleted}
        name={post.name}
        tripcode={post.tripcode}
        email={post.email}
        subject={post.subject}
        sage={post.sage}
        is_op_post={post.is_op_post}
      />
    ))}
  </div>
);
