import Slide from "../Slide";
import Section from "../Section";

const PageOne = () => {
  return (
    <Slide backgroundImage="/assets/greenhill.jpg">
      <section>
        <h1 className="flex flex-col mb-3 font-play">
          <span class="ml-[-10px] text-8xl uppercase leading-[80px]">
            Gamer’s Life
          </span>
          <span class="text-xl 2xl:text-3xl">
            Comment la vie de Lilian Peuron a rencontré l’univers du jeu vidéo.
          </span>
        </h1>
        <p class="italic font-semibold text-justify 2xl:text-2xl">
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
      <div className="flex flex-col col-start-2 gap-y-2">
        <Section title="Première graine et floraison d’une passion">
          <strong>
            Dès sa naissance en 2003, le monde du jeu vidéo était déjà à ses
            côtés.
          </strong>{" "}
          “Mon père était un gros joueur”, explique-t-il, “il aimait
          particulièrement les jeux de foot. L’ayant beaucoup regardé jouer, il
          n’y a aucun doute que c’est de là que tout a commencé”. Sa première
          expérience vidéoludique fut le premier opus de la licence du hérisson
          supersonique le plus connu, Sonic The Hedgehog, “C'était mon tout
          premier jeu, j’y jouais tout le temps sur le téléphone à clapet de ma
          mère” lâche-t-il dans un sourire communicatif. Pourtant c’est le{" "}
          <strong>31 octobre 2009</strong>, à l’arrivée de ses 6 ans, que Lilian
          posséda sa toute première console, <strong>la Nintendo DS</strong>, et
          son tout premier jeu, <strong>Pokémon SoulSilver</strong>, remake du
          jeu de la deuxième génération nous faisant parcourir la région de
          Johto à la recherche de ces fameuses créatures afin de devenir le
          meilleur des dresseurs. “Je voyais le jeu Pokémon sur toutes les pubs
          à la télévision, j’étais tellement heureux de l’avoir eu.” Lilian n’a
          pas échappé à la popularité de la Nintendo DS étant la seconde console
          la plus vendue de tous les temps. Il profita de cette console jusqu’en{" "}
          <strong>2012</strong> avant de la revendre pour pouvoir s’acheter la{" "}
          <strong>Nintendo 3DS</strong>. Parallèlement <strong>en 2011</strong>,
          Lilian a pu obtenir sa première console de salon, la{" "}
          <strong>PlayStation 3</strong>, dans un pack comprenant les jeux Gran
          Turismo 5 et surtout <strong>Uncharted 2: Among Thieves</strong>, un
          jeu qui l’a beaucoup marqué. Depuis qu’il est enfant, Lilian a eu
          l’occasion de jouer sur PC avec quelques jeux sur DVD ou téléchargés
          et a pu découvrir l’avènement des jeux Flash. Pourtant, c’est au{" "}
          <strong>collège</strong> qu’il obtiendra son{" "}
          <strong>premier ordinateur</strong>, un Asus faisant office de petit
          PC et de tablette. “Il n’était pas fait pour faire tourner de gros
          jeux mais avec les bonnes configurations il pouvait faire tourner
          Minecraft sans problème” explique-t-il. <strong>En 2017</strong>, il
          obtiendra la <strong>Nintendo Switch</strong>, qui est à la fois une
          console de salon et une console portable. ”Les consoles portables sont
          vraiment pratiques à transporter pour les vacances, mais avec la
          Nintendo Switch, je ne pouvais pas rêver mieux. J’ai une préférence
          pour les consoles de Nintendo car une grande partie de leurs jeux sont
          exclusivement sur leurs consoles, en comparaison avec d’autres jeux
          sur d'autres supports qui ont plus de chances de se retrouver sur PC”
          avoue-t-il. Enfin <strong>depuis 2021</strong>, il possède un{" "}
          <strong>PC gaming</strong> qui lui offre la possibilité de jouer à des
          jeux qui demandent plus d’espace et de performance. “Évidemment
          l’objectif de cet achat était les études pour ma formation en BUT MMI
          (Métier du Multimédia et de l’Internet), mais j’étais content de
          pouvoir aussi en profiter” déclare-t-il.
        </Section>
        <div className="mt-2">
          <img src="/assets/timeline_supports.PNG" alt="" />
          <span className="text-sm italic font-semibold 2xl:text-xl">
            Frise chronologique des supports de jeu de Lilian Peuron
          </span>
        </div>
      </div>
    </Slide>
  );
};

export default PageOne;
