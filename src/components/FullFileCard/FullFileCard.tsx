import * as React from "react";

import { HOST_API } from "../../index";
import { Image } from "../Image/Image";
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

  let fileWidth: number;
  let fileHeight: number;

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
  let scale = 1;
  const file =
    type === 0 ? (
      <div
        onWheel={e => {
          const delta = e.deltaY;
          if (delta > 0) {
            scale += 0.05;
          } else {
            scale -= 0.05;
          }
        }}
      >
        <Image width={fileWidth! * scale} height={fileHeight! * scale} path={path} />
      </div>
    ) : (
      <video
        onClick={event => event.stopPropagation()}
        className="full-video"
        src={HOST_API + path}
        // style={{ width: fileWidth, height: fileHeight }}
        controls={true}
      />
    );

  return (
    <div onClick={hideFullFileCard} className="full-file-card">
      {file}
    </div>
  );
};
