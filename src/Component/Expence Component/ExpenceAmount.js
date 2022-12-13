import Card from '../Expence Component/Card'
import '../Expence Component/ExpenceAmount.css'
const ExpenceAmount = props =>
{
    return (
        <Card className="expence_content">${props.amounts}</Card>
    )
};
export default ExpenceAmount;