import * as React from "react";
import * as ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";
import "./postStyles.css";

import axios from "axios";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { MainRouter } from "./routes/MainRouter";

axios.defaults.baseURL = "http://85.15.88.7:8000";

ReactDOM.render(<MainRouter />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
