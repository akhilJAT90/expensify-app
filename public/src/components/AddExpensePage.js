import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';


const AddExpensePage = (props)=>(
    <div>
    <h1><ExpenseForm onSubmit={(expense)=>{
        props.dispatch(addExpense(expense));
        props.history.push('/');
        //console.log(expense);
    }} /></h1>
    </div>
);

    

export default connect()(AddExpensePage) ;//we don't need anything from the store , so we left connect (empty)