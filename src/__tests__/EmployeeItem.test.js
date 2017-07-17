import React from 'react';
import { shallow } from 'enzyme';
import EmployeeItem from "../app/components/EmployeeItem";

describe('EmploeyeeItem', ()=>{
    let wrapper;
    let onSubmit;
    const data = {
        'id':1,
        'firstName': 'test',
        'lastName': 'tester',
    };

    beforeEach(() => {
        onSubmit = jest.fn();
        wrapper = shallow(<EmployeeItem onUpdate={onSubmit} employee={data}/>);
    });

    it('should render', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('find name', () => {
        expect(wrapper.find('td').at(1).text()).toEqual(data.firstName);
    });

    it('change state to edit mode', () => {
        const button = wrapper.find('button').first();
        expect(button).toBeDefined();
        button.simulate('click');

        const input = wrapper.find('input').first();
        expect(input.type()).toEqual('input');
        expect(input.prop('value')).toEqual(data.firstName);
        expect(wrapper.state().isEdit).toEqual(true);
    });
})