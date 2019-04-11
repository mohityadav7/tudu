import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/layout/Navbar";
import MainLayout from "./components/layout/MainLayout";
import Auth from './components/auth/Auth';
import Homepage from './components/home/Homepage';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.min.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route exact path='/' component={Homepage} />
					<Route path='/dashboard' component={MainLayout} />
					<Route path='/auth' component={Auth} />
					<Route path='/auth/logout' component={Homepage} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
