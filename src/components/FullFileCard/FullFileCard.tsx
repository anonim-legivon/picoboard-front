import * as React from "react";

import { HOST_API } from "../../index";
import "./FullFileCard.css";

interface IFullFileCardProps {
  path: string;
  width: number;
  height: number;
  type: number;
  hideFullFileCard: () => void;
}

export const FullFileCard = ({ path, width, height, type, hideFullFileCard }: IFullFileCardProps) => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const rel = width / height;

  let fileWidth;
  let fileHeight;

  if (screenWidth > width && screenHeight > height) {
    fileWidth = width;
    fileHeight = height;
  } else if (screenWidth < width && screenHeight < height) {
    if (width - screenWidth > (height - screenHeight) * rel) {
      fileWidth = screenWidth;
      fileHeight = screenWidth / rel;
    } else {
      fileHeight = screenHeight;
      fileWidth = fileHeight * rel;
    }
  } else if (screenWidth < width && screenHeight > height) {
    fileHeight = screenHeight;
    fileWidth = screenHeight * rel;
  } else if (screenWidth > width && screenHeight < height) {
    fileWidth = screenWidth;
    fileHeight = screenWidth / rel;
  }
  const file =
    type === 0 ? (
      <img
        onClick={event => event.stopPropagation()}
        className="full-img"
        src={HOST_API + path}
        style={{ width: fileWidth, height: fileHeight }}
        alt=""
      />
    ) : (
      <video
        onClick={event => event.stopPropagation()}
        className="full-video"
        src={HOST_API + path}
        style={{ width: fileWidth, height: fileHeight }}
        controls={true}
      />
    );

  return (
    <div onClick={hideFullFileCard} className="full-file-card">
      {file}
    </div>
  );
};
