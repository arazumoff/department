import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import DepartmentList from '../app/components/DepartmentList';

const mockStore = configureStore();
const props={
    department:[
        {id:1, name: "test"},
        {id:2, name: "test2"},
    ]
};

describe('EmploeyeeItem', ()=>{
    let wrapper, store;

    beforeEach(() => {
        store = mockStore(props);
        wrapper = mount(<Provider store={store}><DepartmentList/></Provider>);
    });

    it('should render', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('count items', () =>{
        expect(wrapper.find('DepartmentItem').length).toEqual(2);
    });
})
