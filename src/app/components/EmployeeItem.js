import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SelectBox from "./SelectBox";

class EmployeeItem extends React.Component{

    constructor(props) {
        super(props);
        const {employee} = props;
        this.state = {
            isEdit: false,
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            departmentId: employee.departmentId,
            departmentName: employee.department.name
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
        const {onUpdate} = this.props;
        onUpdate(this.state);
        this.setState({isEdit:false});
    }

    handleSelect=(value, text)=>{
        const {department, onUpdate} = this.props;
        this.setState(Object.assign({}, this.state, {departmentId: value, departmentName: text}));
    }

    render(){
        const {employee} = this.props;
        let html = (
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.firstName}</td>
                <td>{this.state.lastName}</td>
                <td>{this.state.departmentName}</td>
                <td><button className="btn" onClick={(e) => this.setState({isEdit:true})}>Edit</button></td>
            </tr>
        )
        if(this.state.isEdit){
            html = (
                <tr>
                    <td>{employee.id}</td>
                    <td><input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={(e)=> this.handleChange(e)}/></td>
                    <td><input type="text"  className="form-control" name="lastName" value={this.state.lastName} onChange={(e)=> this.handleChange(e)}/></td>
                    <td><SelectBox selected={employee.departmentId} onSelect={this.handleSelect}/></td>
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