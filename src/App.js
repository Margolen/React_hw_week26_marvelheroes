import "./App.css";
import heroes from "./marvelheroes.json";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="App">
      {heroes.map((hero) => (
        <Card
          name={hero.name}
          url={hero.img}
          universe={hero.universe}
          alter_ego={hero.alter_ego}
          activity={hero.activity}
          friends={hero.friends}
          superpowers={hero.superpowers}
        />
      ))}
    </div>
  );
}
