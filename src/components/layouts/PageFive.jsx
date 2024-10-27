import LeftImgBlock from "../LeftImgBlock";
import RightImgBlock from "../RightImgBlock";
import Section from "../Section";
import Slide from "../Slide";

const PageFive = () => {
  return (
    <Slide backgroundImage="/assets/ssbu.jpg">
      <div className="flex flex-col gap-y-4">
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
      </div>
      <div className="flex flex-col gap-y-4">
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
        <LeftImgBlock
          imgGif="/assets/icarus.gif"
          imgFix="/assets/icarus_fix.jpg"
        >
          <strong>Kid Icarus: Uprising</strong> a marqué une étape importante
          dans la vie de Lilian, notamment en raison de son statut de premier
          jeu pour la Nintendo 3DS. “Ce jeu a une place spéciale pour moi.
          C’était mon premier jeu sur la Nintendo 3DS, mais ce n’est pas
          seulement pour ça que je l’adore. Pour moi, c’est le jeu le plus
          abouti de la console en termes de gameplay.” Lilian souligne également
          la qualité du mode en ligne, impressionnant pour l’époque. “Encore
          aujourd’hui, il m’arrive de relancer le jeu quand j’allume ma 3DS.”
        </LeftImgBlock>
      </div>
    </Slide>
  );
};

export default PageFive;
