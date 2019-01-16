import * as React from "react";
import { Link } from "react-router-dom";

import { ICategories } from "src/store/intefaces";
import "./SideMenu.css";
import { SideMenuCategory } from "./SideMenuCategory";

interface ISideMenuProps {
  categories: ICategories;
}

class SideMenu extends React.Component<ISideMenuProps> {
  public render() {
    const categories = this.props.categories.data;

    return (
      <div className="side-menu">
        {categories.map(category => {
          const boards = category.boards.map(board => (
            <li key={board.last_num}>
              <Link to={`/${board.board}`}>{`/${board.board}/ - ${board.board_name}`}</Link>
            </li>
          ));
          return <SideMenuCategory key={category.id} name={category.name} boards={boards} />;
        })}
      </div>
    );
  }
}
export default SideMenu;
