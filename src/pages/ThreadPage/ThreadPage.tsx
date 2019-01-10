import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import { CornerAlert } from "src/components/CornerAlert/CornerAlert";
import { ErrorComponent } from "src/components/ErrorComponent/ErrorComponent";
import { singleThreadFetchRequestAction } from "src/store/actions/single-thread-fetch";
import { ISingleThread, IStore, IThreadPageParameters } from "src/store/intefaces";
import { PageTemplate } from "src/templates/PageTemplate/PageTemplate";

interface IThreadPageProps extends RouteComponentProps<IThreadPageParameters> {
  singleThread: ISingleThread;
  fetchSingleThread: (board: string, thread: string) => void;
}

class ThreadPage extends React.Component<IThreadPageProps> {
  public render() {
    const { data, loading, err } = this.props.singleThread;

    return (
      <PageTemplate className="single-thread-page">
        {err ? <ErrorComponent message={err} /> : <SingleThreadWrapper data={data} />}
        {loading ? <CornerAlert text="Гружусь" /> : null}
      </PageTemplate>
    );
  }
  public componentDidMount() {
    const { thread, board } = this.props.match.params;
    this.props.fetchSingleThread(thread, board);
  }
}
const mapStateToProps = ({ singleThread }: IStore) => ({
  singleThread
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchSingleThread: (board: string, thread: string) => dispatch(singleThreadFetchRequestAction(thread, board))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadPage);
