import React , { useState } from 'react'
import ExpenceHeading from '../Expence Component/ExpenceHeading';
import ExpenceAmount from '../Expence Component/ExpenceAmount';
import ExpenseDate from '../Expence Component/ExpenseDate';
import Card from '../Expence Component/Card';
import '../Expence Component/ExpenceWrapper.css'
import '../Expence Component/ExpenceHeading.css'
import '../Expence Component/Button.css'
const ExpenceItem = props => {
    let [title,newTitle] = useState(props.title);
    const clickHandler = ()=>{
        newTitle('Updated');
        console.log(title)
    }
    return(
        <Card className="expence_wrapper">
            <ExpenseDate dates={props.dates} />
            <ExpenceHeading heading = {title}/>
            <ExpenceAmount amounts={props.amount}/>
            <button className={"click_button"} onClick={clickHandler}>Click Here to Update</button>
        </Card>
    );
};

export default ExpenceItem;