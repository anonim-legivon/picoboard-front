import * as React from "react";

import { PageTemplate } from "src/templates/PageTemplate/PageTemplate";

class BoardPage extends React.Component {
  public render() {
    return (
      <PageTemplate className="board">
        <div>!</div>
      </PageTemplate>
    );
  }
}

export default BoardPage;
