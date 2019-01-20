import * as React from "react";
import * as ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";
import "./postStyles.css";

import axios from "axios";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { MainRouter } from "./routes/MainRouter";

export const HOST_API = "http://85.15.117.7:8000";

axios.defaults.baseURL = HOST_API;

ReactDOM.render(<MainRouter />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
