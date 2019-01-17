import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

import { IBoardPageParameters, IPost } from "src/store/intefaces";
import { FileCard } from "../FileCard/FileCard";
import "./OpPostCard.css";

interface IPostCardProps extends RouteComponentProps<IBoardPageParameters> {
  data: IPost;
  key: number;
  openFullFileCard: (path: string, width: number, height: number, type: number) => void;
}
const OpPostCard = ({ data, key, match, openFullFileCard }: IPostCardProps) => {
  return (
    <div className="oppost-card">
      <div className="oppost-card__head">
        {data!.subject ? <span className="oppost-card__subject"> {data!.subject}</span> : null}
        <span className="oppost-card__name">{data!.name}</span>
        <span className="oppost-card__date">{data!.timestamp}</span>
        <span className="oppost-card__number">{`№${data!.num}`}</span>
        <span className="op">{data.op}</span>
        <span className="oppost-card__order">{key}</span>
        <Link to={`${match.params.board}/${data!.num.toString()}`}>Ответить</Link>
      </div>
      <div className="files">
        {data.files.map(file => (
          <FileCard openFullFileCard={openFullFileCard} {...file} />
        ))}
      </div>

      <div className="oppost-card__body" dangerouslySetInnerHTML={{ __html: data!.comment }}>
        {}
      </div>
    </div>
  );
};
export default withRouter(OpPostCard);
