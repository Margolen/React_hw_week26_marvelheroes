import "./Card.css";



export default function Card(props) {
  return (
    <div className="hero_card">

        <div className="hero-name">{props.name}</div>
        <img src={props.url} alt="herophoto"/> 
        <div className="hero-universe">{props.universe}</div>
        <div className="hero-alter_ego">{props.alter_ego}</div>
        <div className="hero-type_of_activity">{props.activity}</div>
        <div className="hero-friends">{props.friends}</div>
        <div className="hero-superpowers">{props.superpowers}</div> 

    </div>
  )
}
