import React from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions';

class SelectBox extends React.Component{

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({type: ActionTypes.DEPARTMENTS_FETCH_REQUESTED});
    }

    render() {
        const {departments, onSelect} = this.props;
        const options = departments.map(item=> <option key={item.id} value={item.id}>{item.name}</option>)
        return (<select name="department" className="form-control" onChange={(e)=>{
            var index = e.nativeEvent.target.selectedIndex;
            onSelect(e.target.value, e.nativeEvent.target[index].text)
        }}>{options}</select>)
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
export default connect(makeMapStateToProps)(SelectBox)
