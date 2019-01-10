import * as React from "react";

import { ICatalogPost } from "src/store/intefaces";
import { OpPostCard } from "../OpPostCard/OpPostCard";
import { PostCard } from "../PostCard/PostCard";

interface IThreadsWrapperProps {
  data: ICatalogPost[];
}

export const ThreadsWrapper = ({ data }: IThreadsWrapperProps) => {
  let counter = 0;

  const threads = (
    <div className="threads-wrapper">
      {data.map(catalogPost => {
        counter++;
        return (
          <div key={counter}>
            <OpPostCard data={catalogPost.op_post} key={counter} />
            {catalogPost.last_posts.map(post => {
              counter++;
              return (
                <PostCard
                  key={counter}
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
              );
            })}
          </div>
        );
      })}
    </div>
  );

  return threads;
};
