import uuid from 'uuid';



//Creating Action Generators

//Add_Expense
export const addExpense = ({description='',note = '',createdAt = 0,amount=0}={}) =>({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        note,
        description,
        amount,
        createdAt
    }
});

//Remove_Expense
export const removeExpense = ({id}={}) =>({
    type: 'REMOVE_EXPENSE',
    id 
});

//Edit_Expense
export const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});