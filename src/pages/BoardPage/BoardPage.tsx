import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { Dispatch } from "redux";
import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
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
  hideMenu: boolean;
}
class BoardPage extends React.Component<IBoardPageProps, IBoardPageState> {
  public board = this.props.match.params;

  public state = {
    hideMenu: false
  };

  public render() {
    const { data, loading } = this.props.threads;
    const { categories, fetchCategories } = this.props;

    return (
      <PageTemplate className="board">
        <Header />
        <h1 className="board__name">{data ? data![0].board : ""}</h1>
        <button className="hide-menu-button" onClick={this.hideMenuHandler}>
          {this.state.hideMenu ? ">>" : "<<"}
        </button>
        <div className="wrapper">
          {this.state.hideMenu ? null : <SideMenu categories={categories} fetchCategories={fetchCategories} />}
          {data ? <ThreadsWrapper data={data} /> : null}
          {loading ? <CornerAlert text="Гружусь" /> : null}
        </div>
      </PageTemplate>
    );
  }
  public componentDidMount() {
    this.props.fetchThreads(this.props.match.params.board);
  }
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
