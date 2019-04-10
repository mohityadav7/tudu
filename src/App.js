import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/layout/Navbar";
import MainLayout from "./components/layout/MainLayout";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.min.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<div>
						This should stay here. This should stay here. This should stay here.
						<Link to="/course/3"> Course 3 </Link>
						<Link to="/dashboard"> Dashboard </Link>
						<Link to="/courses"> Courses </Link>
						<Link to="/settings"> Settings </Link>
					</div>
					<Route path='/dashboard' component={MainLayout} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/logout' component={Login} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
