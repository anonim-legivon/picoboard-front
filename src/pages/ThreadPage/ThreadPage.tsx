import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import { ErrorComponent } from "src/components/ErrorComponent/ErrorComponent";
import { Header } from "src/components/Header/Header";
import SideMenu from "src/containers/SideMenu/SideMenu";
import { categoriesFetchRequestAction } from "src/store/actions/caregories-fetch";
import { singleThreadFetchRequestAction } from "src/store/actions/single-thread-fetch";
import { ICategories, ISingleThread, IStore, IThreadPageParameters } from "src/store/intefaces";
import { PageTemplate } from "src/templates/PageTemplate/PageTemplate";
import { SingleThreadWrapper } from "../../components/SingleThreadWrapper/SingleThreadWrapper";

interface IThreadPageProps extends RouteComponentProps<IThreadPageParameters> {
  categories: ICategories;
  singleThread: ISingleThread;
  fetchSingleThread: (board: string, thread: string) => void;
  fetchCategories: () => void;
}

class ThreadPage extends React.Component<IThreadPageProps> {
  public render() {
    const { data, loading, err } = this.props.singleThread;
    const { categories } = this.props;

    return (
      <PageTemplate className="single-thread-page">
        <Header name={data.board} />
        <div className="wrapper">
          <div className="create-thread__wrapper">
            <span>Создать тред</span>
          </div>
          <SideMenu categories={categories} />
          {err ? <ErrorComponent message={err} /> : <SingleThreadWrapper data={data} />}
          {loading ? <CornerAlert text="Гружусь" /> : null}
        </div>
      </PageTemplate>
    );
  }
  public componentDidMount() {
    const { thread, board } = this.props.match.params;
    const { categories, fetchSingleThread, fetchCategories } = this.props;

    fetchSingleThread(board, thread);

    if (!categories.data) {
      fetchCategories();
    }
  }
}
const mapStateToProps = ({ singleThread, categories }: IStore) => ({
  categories,
  singleThread
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCategories: () => dispatch(categoriesFetchRequestAction()),
  fetchSingleThread: (board: string, thread: string) => dispatch(singleThreadFetchRequestAction(thread, board))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadPage);
