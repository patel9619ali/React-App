import '../Expence Component/Card.css'
function Card(props){
    let classes = 'cardsDesign ' + props.className;
    return(
      <div className={classes}>{props.children}</div>
    )
}
export default Card;