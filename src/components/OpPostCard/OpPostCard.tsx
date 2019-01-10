import * as React from "react";
import { IPost } from "src/store/intefaces";

interface IPostCardProps {
  data: IPost | null;
  key: number;
}

export const OpPostCard = ({ data, key }: IPostCardProps) => (
  <div className="oppost-card">
    <div className="oppost-card__head">
      {data!.subject ? (
        <span className="oppost-card__subject"> {data!.subject}</span>
      ) : null}
      <span className="oppost-card__name">{data!.name}</span>
      <span className="oppost-card__date">{data!.timestamp}</span>
      <span className="oppost-card__number">{`№${data!.num}`}</span>
      <span className="oppost-card__order">{key}</span>
    </div>
    <div className="oppost-card__body">{data!.comment}</div>
  </div>
);
