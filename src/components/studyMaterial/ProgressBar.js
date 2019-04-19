import React from "react";
import { Progress } from "antd";

class ProgressBar extends React.Component {
	state = {
		percent: 0
	};

	render() {
		return (
			<Progress percent={this.props.percent} />
		);
	}
}

export default ProgressBar;