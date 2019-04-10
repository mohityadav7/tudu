import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import CourseDetails from "./components/courses/CourseDetails";
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.min.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{/* <Navbar /> */}
					{/* <Sider /> */}
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/course/:id' component={CourseDetails} />
          </Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
