
import './ExpenceItem.css'
function ExpenceItem(pros){
    return(
        <div className="expence_wrapper">
            <div className='srNo'>{pros.idName}</div>
            <div className="expence_date">{pros.dates.toISOString()}</div>
            <h2 className="expence_heading">{pros.title}</h2>
            <p className="expence_content">{pros.amount}</p>
        </div>

    );
};

export default ExpenceItem;