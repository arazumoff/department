import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class EmployeeItem extends React.Component{

    constructor(props) {
        super(props);
        const {employee} = props;
        this.state = {
            isEdit: false,
            firstName: employee.firstName,
            lastName: employee.lastName,
            departmentId: employee.departmentId
        };
    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value});
        console.log(target.name, target.value)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    handleSubmit(event){
        this.setState({isEdit:false})
    }

    render(){
        const {employee} = this.props;
        let html = (
            <tr>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.departmentId}</td>
                <td><button className="btn" onClick={(e) => this.setState({isEdit:true})}>Edit</button></td>
            </tr>
        )
        if(this.state.isEdit){
            html = (
                <tr>
                    <td>{employee.id}</td>
                    <td><input type="text" name="firstName" value={this.state.firstName} onChange={(e)=> this.handleChange(e)}/></td>
                    <td><input type="text" name="lastName" value={this.state.lastName} onChange={(e)=> this.handleChange(e)}/></td>
                    <td>{employee.departmentId}</td>
                    <td>
                        <button className="btn" onClick={(e) => this.handleSubmit(e)}>Save</button>
                        <button className="btn" onClick={(e) => this.setState({isEdit:false})}>Cancel</button>
                    </td>
                </tr>
            )
        }
        return (html)
    }
}

export default EmployeeItem