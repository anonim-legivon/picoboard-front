import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import { ErrorComponent } from "src/components/ErrorComponent/ErrorComponent";
import { FullFileCard } from "src/components/FullFileCard/FullFileCard";
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
interface IThreadPageState {
  hideFullFileCard: boolean;
  hideMenu: boolean;
  height: number;
  path: string;
  type: number;
  width: number;
}

class ThreadPage extends React.Component<IThreadPageProps, IThreadPageState> {
  public state = {
    height: 0,
    hideFullFileCard: true,
    hideMenu: false,
    path: "",
    type: 0,
    width: 0
  };
  public render() {
    const { data, loading, err } = this.props.singleThread;
    const { categories } = this.props;

    const { height, path, width, type, hideFullFileCard } = this.state;

    return (
      <PageTemplate className="single-thread-page">
        <Header name={data.board} />
        <div className="wrapper">
          {hideFullFileCard ? null : (
            <FullFileCard
              height={height}
              path={path}
              width={width}
              type={type}
              hideFullFileCard={this.hideFullFileCard}
            />
          )}
          <div className="create-thread__wrapper">
            <span>Создать тред</span>
          </div>
          <SideMenu categories={categories} />
          {err ? (
            <ErrorComponent message={err} />
          ) : (
            <SingleThreadWrapper openFullFileCard={this.openFullFileCard} data={data} />
          )}
          {loading ? <CornerAlert text="Гружусь" /> : null}
        </div>
      </PageTemplate>
    );
  }
  public componentDidMount() {
    const { thread, board } = this.props.match.params;
    const { categories, fetchSingleThread, fetchCategories } = this.props;

    fetchSingleThread(board, thread);

    if (categories.data.length === 0) {
      fetchCategories();
    }
  }
  private hideFullFileCard = () => this.setState({ hideFullFileCard: true });
  private openFullFileCard = (path: string, width: number, height: number, type: number) => {
    this.setState({ type, width, height, path, hideFullFileCard: false });
  };
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
