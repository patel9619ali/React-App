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
        <Card className="main_card_wrapper">
        <Card className="expence_wrapper">
            <ExpenseDate dates={props.items[0].date} />
            <ExpenceHeading heading = {props.items[0].title}/>
            <ExpenceAmount amounts={props.items[0].amount}/>
            <button className={"click_button"} onClick={clickHandler}>Click Here to Update</button>
        </Card>
        <Card className="expence_wrapper">
            <ExpenseDate dates={props.items[1].date} />
            <ExpenceHeading heading = {props.items[1].title}/>
            <ExpenceAmount amounts={props.items[1].amount}/>
            <button className={"click_button"} onClick={clickHandler}>Click Here to Update</button>
        </Card>
        <Card className="expence_wrapper">
            <ExpenseDate dates={props.items[2].date} />
            <ExpenceHeading heading = {props.items[2].title}/>
            <ExpenceAmount amounts={props.items[2].amount}/>
            <button className={"click_button"} onClick={clickHandler}>Click Here to Update</button>
        </Card>
        <Card className="expence_wrapper">
            <ExpenseDate dates={props.items[3].date} />
            <ExpenceHeading heading = {props.items[3].title}/>
            <ExpenceAmount amounts={props.items[3].amount}/>
            <button className={"click_button"} onClick={clickHandler}>Click Here to Update</button>
        </Card>
        </Card>
    );
};

export default ExpenceItem;