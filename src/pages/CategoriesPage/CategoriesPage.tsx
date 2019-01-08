import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import { categoriesFetchRequestAction } from "src/store/actions/caregories-fetch";
import { ICategories, IStore } from "src/store/intefaces";
import { CategoriesContainer } from "../../components/CategoriesConateiner/CategoriesContainer";
import { PageTemplate } from "../../templates/PageTemplate/PageTemplate";

interface ICategoriesPageProps {
  categories: ICategories;
  fetchCategories: () => void;
}

class CategoriesPage extends React.Component<ICategoriesPageProps> {
  public render() {
    const { data, loading } = this.props.categories;
    return (
      <React.Fragment>
        <PageTemplate className="categories-page">
          {data ? <CategoriesContainer categories={data} /> : null}
        </PageTemplate>
        {loading ? <CornerAlert text="Гружусь" /> : null}
      </React.Fragment>
    );
  }
  public componentDidMount() {
    this.props.fetchCategories();
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    categories: state.categories
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCategories: () => dispatch(categoriesFetchRequestAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);
