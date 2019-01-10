import * as React from "react";
import * as ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { MainRouter } from "./routes/MainRouter";

axios.defaults.baseURL = "http://85.15.86.181:8000";

ReactDOM.render(<MainRouter />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
