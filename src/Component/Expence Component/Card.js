import '../Expence Component/Card.css'
const Card = props =>{
    let classes = 'cardsDesign ' + props.className;
    return(
      <div className={classes}>{props.children}</div>
    )
}
export default Card;