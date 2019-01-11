import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";

import { categoriesFetchRequestAction } from "src/store/actions/caregories-fetch";
import { ICategories, IStore } from "src/store/intefaces";

interface ISideMenuProps {
  categories: ICategories;
  fetchCategories: () => void;
}

class SideMenu extends React.Component<ISideMenuProps> {
  public render() {
    const categories = this.props.categories.data;
    return (
      <div className="side-menu">
        {categories.map(category => (
          <React.Fragment>
            <h3>{category.name}</h3>
            {category.boards.map(board => (
              <li>
                <Link to={`/${board.board}`}>{board.board_name}</Link>
              </li>
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  }
  public componentDidMount() {
    if (this.props.categories.data.length === 0) {
      this.props.fetchCategories();
    }
  }
}
const mapStateToProps = ({ categories }: IStore) => ({
  categories
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCategories: () => dispatch(categoriesFetchRequestAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
