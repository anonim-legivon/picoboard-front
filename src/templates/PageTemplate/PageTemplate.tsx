import * as React from "react";

interface IPageTemplateProps {
  className: string;
  children: React.ReactNode;
}

export class PageTemplate extends React.Component<IPageTemplateProps> {
  public render() {
    return (
      <div className={`page ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
