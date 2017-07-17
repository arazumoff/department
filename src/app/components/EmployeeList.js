import React from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions';
import EmployeeItem from "./EmployeeItem";

class EmployeeList extends React.Component{

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({type: ActionTypes.EMPLOYEES_FETCH_REQUESTED});
    }

    _onUpdate = (item)=>{
        const { dispatch } = this.props;
        console.log('update', item);
        dispatch({type: ActionTypes.EMPLOYEE_UPDATE_REQUESTED, item});
    }

    render(){
        const {employees} = this.props;
        const html = employees.map(item=> <EmployeeItem onUpdate={this._onUpdate} key={item.id} employee={item}/>)
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {html}
                </tbody>
            </table>)
    }
}

const makeMapStateToProps = () => {
    const mapStateToProps = (state, props) => {
        return {
            employees: state.employee
        }
    }
    return mapStateToProps;
}
export default connect(makeMapStateToProps)(EmployeeList)
