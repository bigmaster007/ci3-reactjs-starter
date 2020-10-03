import React, { Component } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/hello";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Hello />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<Home />, document.getElementById("root"));
