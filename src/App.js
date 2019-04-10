import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/layout/Navbar";
import MainLayout from "./components/layout/MainLayout";
import CourseDetails from "./components/courses/CourseDetails";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CoursesList from './components/courses/CoursesList';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.min.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path='/' component={MainLayout} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<Route path='/course/:id' component={CourseDetails} />
						<Route path='/courses' component={CoursesList} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
