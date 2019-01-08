import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { Dispatch } from "redux";
import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import { threadsFetchRequestAction } from "src/store/actions/threads-fetch";
import { ICatalog, IStore } from "src/store/intefaces";
import { PageTemplate } from "src/templates/PageTemplate/PageTemplate";
import { ThreadsWrapper } from "../../components/ThreadsWrapper/TheadsWrapper";
import { IBoardPageParameters } from "../../store/intefaces";

interface IBoardPageProps extends RouteComponentProps<IBoardPageParameters> {
  threads: ICatalog;
  fetchThreads: () => void;
}

let board: string;

class BoardPage extends React.Component<IBoardPageProps> {
  public board = this.props.match.params;

  public render() {
    const { data, loading } = this.props.threads;

    return (
      <PageTemplate className="board">
        {data ? <ThreadsWrapper data={data} /> : null}
        {loading ? <CornerAlert text="Гружусь" /> : null}
      </PageTemplate>
    );
  }
  public componentDidMount() {
    this.props.fetchThreads;
  }
}

const mapStateToProps = ({ threads }: IStore) => ({
  threads
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchThreads: () => dispatch(threadsFetchRequestAction(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage);
