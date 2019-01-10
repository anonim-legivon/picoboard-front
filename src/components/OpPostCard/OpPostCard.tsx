import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { IBoardPageParameters, IPost } from "src/store/intefaces";

interface IPostCardProps extends RouteComponentProps<IBoardPageParameters> {
  data: IPost | null;
  key: number;
}
const OpPostCard = ({ data, key, match }: IPostCardProps) => (
  <div className="oppost-card">
    <div className="oppost-card__head">
      {data!.subject ? <span className="oppost-card__subject"> {data!.subject}</span> : null}
      <span className="oppost-card__name">{data!.name}</span>
      <span className="oppost-card__date">{data!.timestamp}</span>
      <span className="oppost-card__number">{`№${data!.num}`}</span>
      <span className="oppost-card__order">{key}</span>
    </div>
    <div className="oppost-card__body">{data!.comment}</div>
    <Link to={`${match.params.board}/${data!.num.toString()}`}>Ответить</Link>
  </div>
);
export default withRouter(OpPostCard);
