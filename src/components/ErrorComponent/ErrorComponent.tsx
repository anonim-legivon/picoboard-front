import * as React from "react";

interface IErrorComponentProps {
  message: Error;
}

export const ErrorComponent = ({ message }: IErrorComponentProps) => (
  <div className="error">
    <p className="error-message">{message}</p>
  </div>
);
