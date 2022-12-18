import React , {useState} from 'react';
import '../NewExpenceTracker/NewExpenceForm.css'
const NewExpenceForm = () => {
    let [changeTitle , setChangeTitle] = useState('');  
    let [changeAmount , setChangeAmount] = useState('');  
    let [changeDate , setChangeDate] = useState('');  
    const titleChangeHandler = (event) => {
        setChangeTitle = event.target.value;
    }
    const amountChangeHandler = (event) => {
        setChangeAmount = event.target.value;
    }
    const dateChangeHandler = (event) => {
        setChangeDate = event.target.value;
    }
    const clickExpenceHandle = (event) =>{
        event.preventDefault();
        console.log(setChangeTitle)
        console.log(setChangeAmount)
        console.log(setChangeDate)
    }
    return(
        <form>
            <div className='title_form_wrapper'>
                <label>Title</label>
                <input className='input_customize' type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className='amount_form_wrapper'>
                <label>Amount</label>
                <input className='input_customize' type="number" onChange={amountChangeHandler}></input>
            </div>
            <div className='date_form_wrapper'>
                <label>Date</label>
                <input className='input_customize' type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
            </div>
            <button type='submit' className="button_input" onClick={clickExpenceHandle}>Add Expense</button>
        </form>
    )
}
export default NewExpenceForm;