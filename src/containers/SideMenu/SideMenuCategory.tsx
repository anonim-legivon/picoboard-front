import * as React from "react";

import "./SideMenuCategory.css";

interface ISideMenuCategoryProps {
  name: string;
  boards: React.ReactNode[];
}

interface ISideMenuCategoryState {
  toggle: boolean;
}
export class SideMenuCategory extends React.Component<ISideMenuCategoryProps, ISideMenuCategoryState> {
  public constructor(props: ISideMenuCategoryProps) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  public render() {
    return (
      <div className="side-menu-category">
        <h3 className="side-menu-category__name" onClick={this.toggleHandler}>
          {this.props.name}
        </h3>
        {!this.state.toggle ? <div className="side-menu-category__board-container">{this.props.boards}</div> : null}
      </div>
    );
  }
  private toggleHandler = () => {
    this.setState((prevState: ISideMenuCategoryState) => ({ toggle: !prevState.toggle }));
  };
}
