import React from 'react';
import NewExpenceForm from './NewExpenceForm'

const NewExpenceItem = (props) =>{
    const expenseAllData = (expensedata) =>{
        const expenseScheduledData = {
            ...expensedata,
            id: Math.random(),
        }
        props.OnCheckData(expenseScheduledData);
    }
    return(
        <NewExpenceForm onSubmitExpense={expenseAllData}/>
    )
}
export default NewExpenceItem;

