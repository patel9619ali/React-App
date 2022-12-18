import React , {useState} from 'react';
import '../NewExpenceTracker/NewExpenceForm.css'
const NewExpenceForm = () => {
    let [changeTitle , setChangeTitle] = useState('');  
    let [changeAmount , setChangeAmount] = useState('');  
    let [changeDate , setChangeDate] = useState('');  
    // const [userInput,setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : '',
    // })
    const titleChangeHandler = (event) => {
        setChangeTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
    }
    const amountChangeHandler = (event) => {
        setChangeAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
    }
    const dateChangeHandler = (event) => {
        setChangeDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })
    }

    const submitFormHandler = (event) =>{
        event.preventDefault();
        const expensedata = {
            title: changeTitle,
            amount: changeAmount,
            date: new Date(changeDate),
        }
        console.log(expensedata.title)
        setChangeTitle('')
        setChangeAmount('')
        setChangeDate('')
    }
    return(
        <form onSubmit={submitFormHandler}>
            <div className='title_form_wrapper'>
                <label>Title</label>
                <input className='input_customize' value={changeTitle} type="text" onChange={titleChangeHandler}></input>
               
            </div>
            <div className='amount_form_wrapper'>
                <label>Amount</label>
                <input className='input_customize' value={changeAmount} type="number" onChange={amountChangeHandler}></input>
            </div>
            <div className='date_form_wrapper'>
                <label>Date</label>
                <input className='input_customize' value={changeDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
            </div>
            <button type='submit' className="button_input">Add Expense</button>
        </form>
    )
}
export default NewExpenceForm;