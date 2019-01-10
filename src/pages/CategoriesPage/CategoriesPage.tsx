import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import { categoriesFetchRequestAction } from "src/store/actions/caregories-fetch";
import { ICategories, IStore } from "src/store/intefaces";
import { CategoriesWrapper } from "../../components/CategoriesWrapper/CategoriesWrapper";
import { Header } from "../../components/Header/Header";

interface ICategoriesPageProps {
  categories: ICategories;
  fetchCategories: () => void;
}

class CategoriesPage extends React.Component<ICategoriesPageProps> {
  public render() {
    const { data, loading } = this.props.categories;
    return (
      <div className="background">
        <Header className="main-header" />
        <div className="main-page">
          <div className="logo">Logo</div>
          <p className="about-board">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut, natus consequatur dolore
            consequuntur ratione saepe, corrupti dignissimos quod deserunt quibusdam accusamus nihil! Placeat minima ut
            qui necessitatibus quaerat quas.
          </p>
          {data ? <CategoriesWrapper categories={data} /> : null}
          {loading ? <CornerAlert text="Гружусь" /> : null}
        </div>
      </div>
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
