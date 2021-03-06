import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';


export class AddExpensePage extends React.Component{
    onSubmit =(expense)=>{
        this.props.addExpense(expense);
        this.props.history.push('/');
        //console.log(expense);
    };
    render(){
        return (
            <div>
            <h1><ExpenseForm  onSubmit={this.onSubmit}/></h1>
            </div>
        );
    }
}

const mapDispathToProps = (dispatch)=>({addExpense : (expense)=>dispatch(addExpense(expense))})

export default connect(undefined,mapDispathToProps)(AddExpensePage) ;//we don't need anything from the store , so we left connect (empty)