import ExpenceHeading from '../Expence Component/ExpenceHeading';
import ExpenceAmount from '../Expence Component/ExpenceAmount';
import ExpenseDate from '../Expence Component/ExpenseDate';
import '../Expence Component/ExpenceWrapper.css'
import '../Expence Component/ExpenceHeading.css'
function ExpenceItem(props){
    return(
        <div className="expence_wrapper">
            <ExpenseDate dates={props.dates} />
            <ExpenceHeading heading = {props.title}/>
            <ExpenceAmount amounts={props.amount}/>
        </div>
    );
};

export default ExpenceItem;