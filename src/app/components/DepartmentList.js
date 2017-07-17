import React from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions';
import DepartmentItem from "./DepartmentItem";

class DepartmentList extends React.Component{

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({type: ActionTypes.DEPARTMENTS_FETCH_REQUESTED});
    }

    _onUpdate = (item)=>{
        const { dispatch } = this.props;
        console.log('update', item);
        dispatch({type: ActionTypes.DEPARTMENT_UPDATE_REQUESTED, item});
    }

    render(){
        const {departments} = this.props;
        const html = departments.map(item => <DepartmentItem key={item.id} onUpdate={this._onUpdate} department={item}/>)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {html}
                </tbody>
            </table>
        )
    }
}

const makeMapStateToProps = () => {
    const mapStateToProps = (state, props) => {
        return {
            departments: state.department
        }
    }
    return mapStateToProps;
}
export default connect(makeMapStateToProps)(DepartmentList)
