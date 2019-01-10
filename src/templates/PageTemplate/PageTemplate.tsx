import * as React from "react";

import "./PageTemplate.css";

interface IPageTemplateProps {
  className: string;
  children: React.ReactNode;
}

export class PageTemplate extends React.Component<IPageTemplateProps> {
  public render() {
    const { className, children } = this.props;
    return <div className={`page ${className}`}>{children}</div>;
  }
}
