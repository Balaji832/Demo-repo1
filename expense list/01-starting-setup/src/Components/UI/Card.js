import './Card.css';
 export default function Card(Props){
  const classes='Card '+Props.className;

return (
<div className={classes}>{Props.children}</div>

)
}