import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotal from './Expense-total';

const ExpenseDashboardPage = ()=>(
    <div>
    <ExpenseTotal />
    <ExpenseListFilters />
    <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;