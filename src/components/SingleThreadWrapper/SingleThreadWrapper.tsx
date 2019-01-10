import * as React from "react";
import { ISingleThreadData } from "src/store/intefaces";

interface ISingleThreadWrapper {
  data: ISingleThreadData;
}

export const SingleThreadWrapper = ({ data }: ISingleThreadWrapper) => <div className="single-thread-wrapper">!</div>;
