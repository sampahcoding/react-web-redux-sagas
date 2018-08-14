import React, { Component } from "react";

class Reload extends Component {
	render() {
		return  <div className="reload"
			onClick={this.props.doReload}
			style={{textAlign: "center", cursor: "pointer", fontSize: "14px"}}>
			<img src={require("assets/images/refresh.gif")} className="col-1" style={{width: "100px"}} alt="reload"/>
			<div>Reload</div>
		</div>;
	}
}

export default Reload;
