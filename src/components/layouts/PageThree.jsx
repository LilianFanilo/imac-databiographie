import LeftImgBlock from "../LeftImgBlock";
import RightImgBlock from "../RightImgBlock";
import Section from "../Section";
import Slide from "../Slide";

const PageThree = () => {
  return (
    <Slide backgroundImage="/assets/minecraft.jpeg">
      <Section title="Amis, famille et jeux vidéo">
        Durant son enfance, Lilian passait énormément de temps à jouer aux jeux
        vidéo, souvent{" "}
        <strong>en compagnie de son père, surtout à des jeux de combats</strong>
        . “Mon père avait une philosophie très compétitive, c’était ‘je gagne,
        peu importe qui est en face’. Mais au final, soit il était mauvais
        perdant, soit il répétait sans cesse la même technique pour l’emporter.
        Malgré tout, on finissait toujours par bien s’amuser !” En tant que fils
        unique, les jeux vidéo ont joué un rôle important dans la vie de Lilian,
        non seulement pour s'occuper mais aussi pour créer des liens. “Quand la
        journée de cours se terminait, mes amis et moi nous précipitions chez
        nous, on se connectait sur Skype et on lançait Minecraft. C’était notre
        manière de rester ensemble en dehors de l’école.” À une époque où les
        mondes virtuels devenaient des terrains de jeu partagés,{" "}
        <strong>Minecraft</strong> était un moyen pour Lilian de construire,
        collaborer, et renforcer les liens avec ses camarades. Le passage du
        collège au lycée n’a fait qu’accentuer cette habitude. “J’invitais
        régulièrement des <strong>amis à la maison</strong> pour jouer sur la
        PlayStation 3, et on passait des heures sur{" "}
        <strong>Call of Duty: Ghosts en écran partagé</strong>. On n’était pas
        vraiment des experts, mais on formait une équipe soudée. Il y avait
        toujours cette petite compétition, mais au fond, le but était simplement
        de passer un bon moment ensemble.” Ces moments en local avec des amis
        étaient essentiels, représentant une époque où la convivialité des
        multijoueurs se vivait souvent côte à côte, sur un même canapé. Durant
        sa formation en{" "}
        <strong>BUT MMI (Métiers du Multimédia et de l’Internet)</strong>,
        Lilian a découvert une nouvelle manière de tisser des liens sociaux,
        cette fois-ci grâce à des jeux beaucoup plus récents. « Si je devais
        choisir un jeu emblématique de cette période, ce serait sans doute
        Valorant. C’était la première fois que je me retrouvais à jouer avec
        autant de personnes dans des parties locales, organisant des
        affrontements 5 contre 5. » <strong>Valorant</strong>, le célèbre jeu de
        tir tactique en équipe de Riot Games, a offert à Lilian et à ses
        camarades de classe un nouveau terrain de jeu pour la compétition et la
        coopération. L’organisation de ces parties, souvent lors de soirées ou
        d’événements, a renforcé les relations qu’il entretenait avec ses amis
        et ses collègues de promotion. Ces expériences multijoueurs, qu'elles
        soient en local avec des amis, ou en ligne avec des équipes, ont façonné
        une grande partie de la vie sociale de Lilian autour du jeu vidéo. Les
        jeux sont devenus non seulement un divertissement, mais aussi un outil
        pour <strong>connecter, échanger et collaborer avec les autres</strong>,
        qu'il s'agisse de{" "}
        <strong>
          membres de la famille, d'amis proches, ou de camarades de classe
        </strong>{" "}
        rencontrés au cours de ses études. Aujourd’hui encore, ces moments
        partagés devant un écran restent gravés dans sa mémoire, illustrant à
        quel point le jeu vidéo a été une constante tout au long de son
        parcours.
      </Section>
      <div className="flex flex-col gap-y-2">
        <Section title="“Les jeux qui m’ont le plus marqué”">
          <span className="text-sm italic font-semibold">
            Pour mieux comprendre son rapport aux jeux vidéo durant son enfance,
            j’ai demandé à Lilian quels sont les titres qui l’ont le plus
            marqué.
          </span>
        </Section>
        <RightImgBlock
          imgGif="/assets/sonic.gif"
          imgFix="/assets/sonic_fix.jpg"
        >
          <strong>Sonic the Hedgehog</strong> reste, sans surprise, la licence
          qui occupe une place particulière dans son cœur. “C’est la licence à
          laquelle j’ai le plus joué. C’est sans conteste ma préférée.” Le
          hérisson bleu a accompagné Lilian depuis ses premiers pas dans le
          monde vidéoludique, et sa passion pour la vitesse et les niveaux
          dynamiques n’a jamais faibli. Cette franchise, pionnière pour Sega,
          représente pour lui une nostalgie, mais aussi une forme de confort
          qu'il retrouve à chaque nouvelle partie.
        </RightImgBlock>
        <LeftImgBlock
          imgGif="/assets/uncharted4.gif"
          imgFix="/assets/uncharted4_fix.jpg"
        >
          <strong>Uncharted</strong> a été une expérience marquante, mais pour
          d’autres raisons. “C’était ma première expérience narrative dans un
          jeu vidéo. Uncharted m’a captivé, non seulement par son histoire, mais
          aussi par son gameplay immersif.” Ce titre, véritable blockbuster des
          jeux d'aventure, a offert à Lilian une immersion sans précédent, avec
          des personnages profonds et une aventure pleine de rebondissements,
          lui donnant un premier aperçu de ce qu’une bonne narration pouvait
          apporter à l’expérience de jeu.”Je me souviens avoir fait plusieurs
          fois les chapitres du troisième opus, celui que j’ai préféré de par
          ses environnements plus variés que le deuxième.”
        </LeftImgBlock>
        <RightImgBlock
          imgGif="/assets/pokemon.gif"
          imgFix="/assets/pokemon_fix.jpg"
        >
          <strong>Pokémon</strong> est également une franchise incontournable
          dans la vie de Lilian. “Qu’il s’agisse des jeux vidéo, du dessin animé
          ou même du jeu de cartes, j’étais complètement accro. J’attendais
          chaque nouvelle génération avec impatience.” Son lien avec Pokémon a
          évolué au fil des années, marquant à la fois son enfance et son
          adolescence. Cependant, il avoue que son enthousiasme pour la série a
          quelque peu diminué. “Aujourd’hui, j’ai arrêté d’acheter les jeux
          Pokémon à cause de leur qualité qui, selon moi, a décliné au fil du
          temps.”
        </RightImgBlock>
      </div>
    </Slide>
  );
};

export default PageThree;
