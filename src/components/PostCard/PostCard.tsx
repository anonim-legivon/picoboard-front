import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

import { IBoardPageParameters, IPost } from "src/store/intefaces";
import "./PostCard.css";

interface IPostCardProps extends RouteComponentProps<IBoardPageParameters> {
  data: IPost;
  key: number;
}
const PostCard = ({ data, key, match }: IPostCardProps) => (
  <div className="post-reply">
    <div className="post-card">
      <div className="post-card__head">
        {data.subject ? <span className="post-card__subject"> {data.subject}</span> : null}
        <span className="post-card__name">{data.name}</span>
        <span className="post-card__date">{data.timestamp}</span>
        <span className="post-card__number">{`№${data.num}`}</span>
        <span className="op">{data.op}</span>
        <span className="post-card__order">{key}</span>
        <Link to={`${match.params.board}/${data.num.toString()}`}>Ответить</Link>
      </div>
      <div className="post-card__body" dangerouslySetInnerHTML={{ __html: data.comment }}>
        {}
      </div>
    </div>
  </div>
);
export default withRouter(PostCard);
