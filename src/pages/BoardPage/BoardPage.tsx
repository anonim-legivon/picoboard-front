import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { Dispatch } from "redux";
import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import { FullFileCard } from "src/components/FullFileCard/FullFileCard";
import SideMenu from "src/containers/SideMenu/SideMenu";
import { categoriesFetchRequestAction } from "src/store/actions/caregories-fetch";
import { threadsFetchRequestAction } from "src/store/actions/threads-fetch";
import { ICatalog, ICategories, IStore } from "src/store/intefaces";
import { PageTemplate } from "src/templates/PageTemplate/PageTemplate";
import { Header } from "../../components/Header/Header";
import { ThreadsWrapper } from "../../components/ThreadsWrapper/TheadsWrapper";
import { IBoardPageParameters } from "../../store/intefaces";
import "./BoardPage.css";

interface IBoardPageProps extends RouteComponentProps<IBoardPageParameters> {
  categories: ICategories;
  threads: ICatalog;
  fetchThreads: (board: string) => void;
  fetchCategories: () => void;
}
interface IBoardPageState {
  hideFullFileCard: boolean;
  hideMenu: boolean;
  height: number;
  path: string;
  type: number;
  width: number;
}
class BoardPage extends React.Component<IBoardPageProps, IBoardPageState> {
  public board = this.props.match.params;

  public state = {
    height: 0,
    hideFullFileCard: true,
    hideMenu: false,
    path: "",
    type: 0,
    width: 0
  };

  public render() {
    const { data, loading } = this.props.threads;
    const { categories } = this.props;
    const { height, hideFullFileCard, path, type, width } = this.state;

    return (
      <PageTemplate className="board">
        <Header name={"..."} />
        <div className="wrapper">
          <button className="hide-menu-button" onClick={this.hideMenuHandler}>
            {this.state.hideMenu ? ">>" : "<<"}
          </button>
          {hideFullFileCard ? null : (
            <FullFileCard
              hideFullFileCard={this.hideFullFileCard}
              height={height}
              width={width}
              path={path}
              type={type}
            />
          )}
          {this.state.hideMenu ? null : <SideMenu categories={categories} />}
          {data ? <ThreadsWrapper openFullFileCard={this.openFullFileCard} data={data} /> : null}
          {loading ? <CornerAlert text="Гружусь" /> : null}
        </div>
      </PageTemplate>
    );
  }
  public componentDidMount() {
    this.props.fetchThreads(this.props.match.params.board);
    if (this.props.categories.data.length === 0) {
      this.props.fetchCategories();
    }
  }
  private hideFullFileCard = () => this.setState({ hideFullFileCard: true });
  private openFullFileCard = (path: string, width: number, height: number, type: number) => {
    this.setState({ type, width, height, path, hideFullFileCard: false });
  };
  private hideMenuHandler = () => {
    this.setState((prevState: IBoardPageState) => {
      return {
        hideMenu: !prevState.hideMenu
      };
    });
  };
}
const mapStateToProps = ({ threads, categories }: IStore) => ({
  categories,
  threads
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCategories: () => dispatch(categoriesFetchRequestAction()),
  fetchThreads: (board: string) => dispatch(threadsFetchRequestAction(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage);
