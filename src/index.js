import React from "react";
import ReactDOM from "react-dom";
import Routing from "Routing";
import registerServiceWorker from "registerServiceWorker";

import { Provider } from "react-redux";
import configureStore from "./stores";

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Routing/>
	</Provider>, document.getElementById("root"));
registerServiceWorker();
