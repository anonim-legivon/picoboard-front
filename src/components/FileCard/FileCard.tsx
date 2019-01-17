import * as React from "react";

import { HOST_API } from "src";
import { IFile } from "src/store/intefaces";
import { secondsToHours } from "../../functions";
import "./FileCard.css";

interface IFileCardProps extends IFile {
  openFullFileCard: (path: string, width: number, height: number, type: number) => void;
}

export const FileCard = ({
  duration,
  height,
  name,
  path,
  size,
  type,
  width,
  thumbnail,
  tn_height,
  tn_width,
  openFullFileCard
}: IFileCardProps) => {
  return (
    <figure className="file-card">
      <figcaption>
        <a href={HOST_API + path} className="file__page-link">
          {name}
        </a>
        <span>
          {`(${Math.floor(size / 1024)}Кб, ${width}x${height}` +
            (type === 1 ? `, ${secondsToHours(duration)}` : "") +
            ")"}
        </span>
        <img
          onClick={() => openFullFileCard(path, width, height, type)}
          style={{
            border: type === 1 ? "1px dashed black" : "none",
            height: tn_height,
            width: tn_width
          }}
          className="file"
          src={HOST_API + thumbnail}
          alt=""
        />
      </figcaption>
    </figure>
  );
};
