import { render, screen } from '@testing-library/react'
import React from 'react'; 
import  store  from '../Store.js'
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'
import App from '../App.js';

const mockStore = store; 

test('renders without crashing', ()=>{
   
    render(
    <Provider store={mockStore}>
        <App/>
    </Provider>
    );

    const newest = screen.getByText('Newest');
    expect(newest).toBeInTheDocument();
})