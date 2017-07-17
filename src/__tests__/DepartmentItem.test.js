import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'

import DepartmentItem from "../app/components/DepartmentItem";

const mockStore = configureMockStore();

describe('DepartmentItem', ()=>{
    const data = {
        'id':1,
        'name': 'test'
    }
    let wrapper;
    let onSubmit;
    beforeEach(() => {
        onSubmit = jest.fn();
        wrapper = shallow(<DepartmentItem onUpdate={onSubmit} department={data}/>);
    });
    it('should render', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('find name', () => {
        expect(wrapper.find('td').at(1).text()).toEqual(data.name);
    });

    it('change state to edit mode', () => {
        const button = wrapper.find('button').first();
        expect(button).toBeDefined();
        button.simulate('click');

        const input = wrapper.find('input').first();
        expect(input.type()).toEqual('input');
        expect(input.prop('value')).toEqual(data.name);
        expect(wrapper.state().isEdit).toEqual(true);
    });

    it('save changes', () => {
        wrapper.setState({isEdit:true, name: data.name});
        const button = wrapper.find('button').first();
        const input = wrapper.find('input').first();
        expect(button).toBeDefined();
        expect(input.type()).toEqual('input');
        input.simulate('change', {target: {value: 'Test name'}});
        button.simulate('click');
        expect(onSubmit).toBeCalledWith(Object.assign({}, data, {name: 'Test name'}));
        expect(wrapper.state().isEdit).toEqual(false);
    })

    it("test cancel", ()=>{
        wrapper.setState({isEdit:true, name: data.name});
        const button = wrapper.find('button').at(1);
        expect(button).toBeDefined();
        button.simulate('click');
        expect(wrapper.state().isEdit).toEqual(false);
    });
})