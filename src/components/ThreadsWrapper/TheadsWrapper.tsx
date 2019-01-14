import * as React from "react";

import { ICatalogPost } from "src/store/intefaces";
import OpPostCard from "../OpPostCard/OpPostCard";
import PostCard from "../PostCard/PostCard";

interface IThreadsWrapperProps {
  data: ICatalogPost[];
}

export const ThreadsWrapper = ({ data }: IThreadsWrapperProps) => {
  const threads = (
    <div className="threads-wrapper">
      {data.map((posts, i) => {
        return (
          <div className="catalog-thread" key={i}>
            <OpPostCard data={posts.op_post} key={i * 100 + 2} />
            {posts.last_posts
              ? posts.last_posts.map((catalogPost, index) => {
                  return (
                    <PostCard
                      key={index}
                      comment={catalogPost.comment}
                      num={catalogPost.num}
                      parent={catalogPost.parent}
                      timestamp={catalogPost.timestamp}
                      is_deleted={catalogPost.is_deleted}
                      name={catalogPost.name}
                      tripcode={catalogPost.tripcode}
                      email={catalogPost.email}
                      subject={catalogPost.subject}
                      sage={catalogPost.sage}
                      is_op_post={catalogPost.is_op_post}
                    />
                  );
                })
              : null}
          </div>
        );
      })}
    </div>
  );
  return threads;
};
