import ExpenceHeading from '../Expence Component/ExpenceHeading';
import ExpenceAmount from '../Expence Component/ExpenceAmount';
import ExpenseDate from '../Expence Component/ExpenseDate';
import Card from '../Expence Component/Card';
import '../Expence Component/ExpenceWrapper.css'
import '../Expence Component/ExpenceHeading.css'
const ExpenceItem = props => {
    const clickHandler = () => {
        console.log('Clicked')
    }
    return(
        <Card className="expence_wrapper">
            <ExpenseDate dates={props.dates} />
            <ExpenceHeading heading = {props.title}/>
            <ExpenceAmount amounts={props.amount}/>
            <button onClick={clickHandler} className="btn_click">Click Here</button>
        </Card>
    );
};

export default ExpenceItem;