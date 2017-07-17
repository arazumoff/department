import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class DepartmentItem extends React.Component{

    constructor(props) {
        super(props);
        const {department} = props;
        this.state = {
            isEdit: false,
            name: department.name
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        const {department, onUpdate} = this.props;
        onUpdate({'id': department.id, 'name': this.state.name});
        this.setState({isEdit:false})
    }

    render(){
        const {department} = this.props;
        let html = (
            <tr>
                <td>{department.id}</td>
                <td>{this.state.name}</td>
                <td><button className="btn" onClick={(e) => this.setState({isEdit:true})}>Edit</button></td>
            </tr>
        );
        if(this.state.isEdit){
            html = (
                <tr>
                <td>{department.id}</td>
                <td><input type="text" value={this.state.name} onChange={(e)=> this.handleChange(e)}/></td>
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

export default DepartmentItem
