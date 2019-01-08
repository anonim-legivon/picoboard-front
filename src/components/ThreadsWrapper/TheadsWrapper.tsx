import * as React from "react";
import { IPost } from "src/store/intefaces";

interface IThreadsWrapper {
  data: {
    op_post: IPost | null;
    last_posts: IPost[];
  };
}

export const ThreadsWrapper = ({ data }: IThreadsWrapper) => (
  <div className="threads-wrapper">
    <OpPostCatd data={data.op_post} />
    {data.last_posts.map(post => (
      <PostCart
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
      />
    ))}
  </div>
);
