import * as React from "react";

import "./CornerAlert.css";

interface ICornerAlertProps {
  text: string;
}

export const CornerAlert = ({ text }: ICornerAlertProps) => (
  <div className="corner-alert">
    <span>{text}</span>
  </div>
);
