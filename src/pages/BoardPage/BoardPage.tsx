import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { Dispatch } from "redux";
import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import SideMenu from "src/containers/SideMenu/SideMenu";
import { threadsFetchRequestAction } from "src/store/actions/threads-fetch";
import { ICatalog, IStore } from "src/store/intefaces";
import { PageTemplate } from "src/templates/PageTemplate/PageTemplate";
import { Header } from "../../components/Header/Header";
import { ThreadsWrapper } from "../../components/ThreadsWrapper/TheadsWrapper";
import { IBoardPageParameters } from "../../store/intefaces";
import "./BoardPage.css";

interface IBoardPageProps extends RouteComponentProps<IBoardPageParameters> {
  threads: ICatalog;
  fetchThreads: (board: string) => void;
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
    console.log(data);

    return (
      <PageTemplate className="board">
        <Header />
        <button onClick={this.hideMenuHandler}>Spryatat'</button>
        <div className="wrapper">
          {this.state.hideMenu ? null : <SideMenu />}
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

const mapStateToProps = ({ threads }: IStore) => ({
  threads
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchThreads: (board: string) => dispatch(threadsFetchRequestAction(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage);
