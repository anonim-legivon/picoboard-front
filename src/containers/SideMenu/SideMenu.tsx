import * as React from "react";
import { Link } from "react-router-dom";

import { ICategories } from "src/store/intefaces";
import "./SideMenu.css";
import { SideMenuCategory } from "./SideMenuCategory";

interface ISideMenuProps {
  categories: ICategories;
  fetchCategories: () => void;
}

class SideMenu extends React.Component<ISideMenuProps> {
  public render() {
    const categories = this.props.categories.data;

    return (
      <div className="side-menu">
        {categories.map(category => {
          const boards = category.boards.map(board => (
            <li key={board.last_num}>
              <Link to={`/${board.board}`}>{`/ ${board.board} / - ${board.board_name}`}</Link>
            </li>
          ));
          return <SideMenuCategory key={category.id} name={category.name} boards={boards} />;
        })}
      </div>
    );
  }
  public componentDidMount() {
    if (this.props.categories.data.length === 0) {
      this.props.fetchCategories();
    }
  }
}
export default SideMenu;
