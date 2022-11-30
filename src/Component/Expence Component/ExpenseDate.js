import Card from '../Expence Component/Card';

function ExpenseDate(pros){
    let month = pros.dates.toLocaleDateString('en-US', {month: 'long'});
    let year = pros.dates.toLocaleDateString('en-US', {year: 'numeric'});
    let day = pros.dates.toLocaleDateString('en-US', {day: 'numeric'});
    return(
        <Card className="date_wrapper">
            <div className="expence_month">{month}</div>
            <div className="expence_year">{year}</div>
            <div className="expence_day">{day}</div>
        </Card>
    );
};
export default ExpenseDate;