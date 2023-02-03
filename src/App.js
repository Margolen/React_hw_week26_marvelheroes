import "./App.css";
// import "./marvelheroes.json";
import Card from "./components/Card";

const heroes = [
  {
    name: "Бэтмен",
    url: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    universe: "DC Comics",
    alter_ego: "Брюс Уэйн",
    type_of_activity: "борец с преступностью, филантроп, миллиардер",
    friends: "Робин, Бэтгерл",
    superpowers:
      "интеллект, обширные познания, знания боевых искусств, ловкость",
    like_number: 0,
  },
  {
    name: "Супермен",
    url: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
    universe: "DC Comics",
    alter_ego: "Кларк Кент",
    type_of_activity: "борец за справедливость",
    friends: "собака Крипто",
    superpowers:
      "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    like_number: 0,
  },
  {
    name: "Спайдер-мен/Человек-паук",
    url: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
    universe: "Marvel Comics",
    alter_ego: "Питер Паркер",
    type_of_activity: "борец за справедливость, студент, фотограф",
    friends: "Мстители, Фантастическая четверка, Люди Икс",
    superpowers:
      "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    like_number: 0,
  },
  {
    name: "Капитан Америка",
    url: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
    universe: "Marvel Comics",
    alter_ego: "Стивен Роджерс",
    type_of_activity: "супер-солдат",
    friends: "Мстители",
    superpowers:
      "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    like_number: 0,
  },
  {
    name: "Тор",
    url: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
    universe: "Marvel Comics",
    alter_ego: "Тор Одинсон",
    type_of_activity: "борец за справедливость, скандинавский бог",
    friends: "Мстители",
    superpowers: "все, что может бог, плюс молот Мьелнир",
    like_number: 0,
  },
  {
    name: "Железный человек",
    url: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    universe: "Marvel Comics",
    alter_ego: "Тони Старк",
    type_of_activity: "гений, миллиардер, плейбой, филантроп",
    friends: "Мстители",
    superpowers:
      "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    like_number: 0,
  },
];

export default function App() {
  return (
    <div className="App">
      {heroes.map((hero) => (
        <Card
          name={hero.name}
          url={hero.url}
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
