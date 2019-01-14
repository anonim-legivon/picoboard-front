import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

import { IBoardPageParameters, IPost } from "src/store/intefaces";
import "./PostCard.css";

interface IPostCardProps extends IPost, RouteComponentProps<IBoardPageParameters> {
  key: number;
}
const PostCard = (props: IPostCardProps) => (
  <div className="post-reply">
    <div className="post-card">
      <div className="post-card__head">
        {props!.subject ? <span className="post-card__subject"> {props!.subject}</span> : null}
        <span className="post-card__name">{props!.name}</span>
        <span className="post-card__date">{props!.timestamp}</span>
        <span className="post-card__number">{`№${props!.num}`}</span>
        <span className="post-card__order">{props.key}</span>
        <Link to={`${props.match.params.board}/${props!.num.toString()}`}>Ответить</Link>
      </div>
      <div className="post-card__body" dangerouslySetInnerHTML={{ __html: props!.comment }}>
        {}
      </div>
    </div>
  </div>
);
export default withRouter(PostCard);
