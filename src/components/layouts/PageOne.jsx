import Slide from "../Slide";

const PageOne = () => {
  return (
    <Slide backgroundImage="/assets/greenhill.jpg">
      <section>
        <h1 className="flex flex-col mb-3 font-play">
          <span class="ml-[-10px] text-8xl uppercase leading-[80px]">
            Gamer’s Life
          </span>
          <span class="text-xl">
            Comment la vie de Lilian Peuron a rencontré l’univers du jeu vidéo.
          </span>
        </h1>
        <p class="italic font-semibold text-justify">
          Depuis son enfance jusqu'à ses 20 ans, Lilian Peuron a exploré plus
          d’une soixantaine de jeux vidéo, naviguant entre des titres iconiques
          comme Mario, Sonic ou Pokémon et des jeux plus confidentiels, tels que
          Kid Icarus: Uprising, Robocraft ou Elsword. Cette passion a évolué
          avec le temps, marquant chaque étape de sa vie. Mais comment tout cela
          a-t-il commencé ? Comment s’est déroulée sa première rencontre avec le
          monde fascinant des jeux vidéo, et surtout, qu’est-ce qui l’a poussé à
          plonger aussi profondément dans cet univers ?
        </p>
      </section>
      <section className="flex items-center bg-white rounded-sm">
        <ul className="flex flex-col pl-4 text-xl list-decimal list-inside font-play gap-y-2">
          <li>Première graine et floraison d'une passion - p.2</li>
          <li>Une liste de jeux conséquente - p.3</li>
          <li>Des jeux colorés, de l'action et de la stratégie - p.4</li>
          <li>Amis, famille et jeux vidéo - p.4</li>
          <li>"Les jeux qui m'ont marqué" - p.5 à p.6</li>
          <li>Et maintenant ? - p.7</li>
        </ul>
      </section>
    </Slide>
  );
};

export default PageOne;
