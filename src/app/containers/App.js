import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import DepartmentList from "../components/DepartmentList";
import Home from "../components/Home";
import EmployeeList from "../components/EmployeeList";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ul className="unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/departments">Departments</Link></li>
                                <li><Link to="/employees">Employees</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <Route exact path="/" component={Home}/>
                            <Route path="/departments" component={DepartmentList}/>
                            <Route path="/employees" component={EmployeeList}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
