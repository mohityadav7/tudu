import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/layout/Navbar";
import MainLayout from "./components/layout/MainLayout";
import Auth from './components/auth/Auth';
import Homepage from './components/home/Homepage';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.min.css';
import Exception from 'ant-design-pro/lib/Exception';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route path='/dashboard' component={MainLayout} />
						<Route path='/auth' component={Auth} />
						<Route path='/*' render={() => <Exception type="404" desc="Sorry, the page you visited does not exist." />} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
