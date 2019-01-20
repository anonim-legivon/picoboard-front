import * as React from "react";
import { HOST_API } from "src";

interface IImageProps {
  path: string;
  width: number | undefined;
  height: number | undefined;
}

export const Image = ({ path, width, height }: IImageProps) => {
  return <img onClick={event => event.stopPropagation()} src={HOST_API + path} style={{ width, height }} alt="" />;
};
