import * as React from "react";
import { connect } from "react-redux";

import { Dispatch } from "redux";
import { categoriesFetchRequestAction } from "src/store/actions/caregories-fetch";
import { ICategories } from "src/store/intefaces";
import { PageTemplate } from "../../templates/PageTemplate/PageTemplate";

interface ICategoriesPageProps {
  categories: ICategories;
  fetchCategories: () => void;
}

class CategoriesPage extends React.Component<ICategoriesPageProps> {
  public render() {
    // const { data, loading, err } = this.props.categories;

    // let categories = [];
    // if (data) {
    //   categories = data.map(category => <p />);
    // }

    return (
      <PageTemplate className="categories-page">
        <div>!</div>
      </PageTemplate>
    );
  }
  public componentDidMount() {
    this.props.fetchCategories();
  }
}

const mapStateToProps = (state: ICategories) => ({
  categories: state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCategories: () => dispatch(categoriesFetchRequestAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);
