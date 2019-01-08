import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { MainRouter } from "./routes/MainRouter";

ReactDOM.render(<MainRouter />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
