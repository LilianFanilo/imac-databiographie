import Section from "../Section";
import Slide from "../Slide";
import Table from "../Table";

const PageTwo = () => {
  return (
    <Slide backgroundImage="/assets/uncharted.png">
      <div className="flex flex-col gap-y-2">
        <Section title="Une liste de jeux conséquente">
          Lilian a possédé plus <strong>d’une soixantaine de jeux</strong>, une
          grande partie d’entre eux venait de cadeaux d’anniversaire, de Noël ou
          de récompense pour ses résultats scolaires. “Je pense que je n’étais
          pas capricieux, on m’offrait un jeu vidéo pendant ces jours spéciaux
          et j’étais content pendant plusieurs mois” s’exclama-t-il. Lilian a
          également profité de l’émergence des technologies alternatives comme
          la fameuse <strong>cartouche R4</strong>, qui permettait de jouer à
          des jeux piratés. “ Grâce à la R4, j’ai découvert énormément de jeux
          gratuitement, ce n’était pas légal mais pour des personnes qui
          n'avaient pas forcément les moyens c’était d’une grande aide. De plus,
          j'ai toujours été quelqu’un qui réfléchissait longuement avant
          d’acheter un jeu, car je ne voulais pas que ce soit une perte d’argent
          si je n’y jouais pas” expliqua-t-il. Aujourd’hui, avec la montée des{" "}
          <strong>jeux free-to-play</strong>, Lilian peut profiter de bonnes
          expériences vidéoludiques gratuitement. “Bien que ces jeux peuvent
          être remplis de micro transactions, ils donnent la possibilité à
          n’importe qui de profiter pleinement de leur passion du jeu vidéo.”
          Lilian n’a pas terminé la plupart des jeux auxquels il a joué, soit
          parce qu’il était trop jeune, soit parce que c’était un genre qui ne
          lui plaisait pas ou soit parce qu’il était déçu. “Il y a des jeux que
          je n’ai pas finis comme Sonic the Hedgehog, Marvel Vs Capcom 3 ou
          Street Fighter 4 parce que j’étais trop jeune et que je ne possédais
          plus les jeux. D’autres comme Pokémon Bouclier ou Splatoon 3 m’ont
          déplu. Enfin, il y a des cas comme Monster Hunter qui est une licence
          que j’aime de par son univers et que pourtant je n’ai jamais achevé
          car les jeux sont longs, complexes et demandent de refaire plusieurs
          fois des missions pour améliorer ces équipements. Je ne cherche plus
          de longues aventures, je suis plutôt pour des expériences qui
          m'offrent une rejouabilité ou des jeux multijoueurs pour passer du
          temps avec mes amis. Si l’histoire d’un jeu m'intéresse, j’aurais
          tendance à suivre un streamer ou un youtubeur plutôt que d’acheter le
          jeu.”
        </Section>
        <Section title="Des jeux colorés, de l’action et de la stratégie">
          Après avoir minutieusement listé tous les jeux que Lilian Peuron a
          possédés au fil des années, un constat évident s'impose : la majorité
          d'entre eux se répartissent principalement dans les genres de{" "}
          <strong>
            la plateforme, de l’aventure, du combat et de la stratégie
          </strong>
          . Ces choix reflètent non seulement ses préférences de joueur, mais
          aussi son évolution en tant que gamer. “Comme je l’ai déjà mentionné,
          je suis surtout à la recherche{" "}
          <strong>
            d’une expérience courte mais captivante, avec de la rejouabilité,
          </strong>{" "}
          ou d’un jeu{" "}
          <strong>que je peux lancer à n’importe quel moment</strong> pour
          passer le temps.” Lilian privilégie des jeux où il peut s'immerger
          rapidement sans avoir à investir de longues heures. Cette recherche de
          flexibilité explique son attrait pour les jeux multijoueurs avec des
          parties de courte durée. “J’aime pouvoir démarrer une partie, jouer
          pendant un moment, puis m’arrêter sans avoir l’impression d’être coupé
          en plein milieu d’une mission longue.{" "}
          <strong>Les jeux de combat et de stratégie</strong> sont parfaits pour
          ça, car ils offrent des sessions intenses mais relativement brèves,
          avec toujours la possibilité de rejouer pour s’améliorer ou explorer
          d’autres approches.” Au-delà des jeux de combat et de stratégie,
          Lilian se tourne également vers des jeux de plateforme et d’aventure,
          des genres qui, bien que souvent plus longs, offrent cette
          rejouabilité qu’il affectionne. Il évoque des titres comme{" "}
          <strong>Sonic Generations ou Uncharted 3: Drake’s Deception</strong>,
          des jeux qui, malgré une progression linéaire, permettent de revenir
          pour améliorer des scores, découvrir des secrets ou simplement revivre
          des niveaux favoris. “Les jeux de plateforme ont toujours eu une place
          spéciale pour moi. Ce sont des jeux où la maîtrise est gratifiante, et
          ils sont souvent colorés et accessibles, deux choses qui me plaisent
          énormément.” Lilian apprécie particulièrement les jeux qui, bien
          qu’accessibles, offrent de la profondeur. “Les jeux de stratégie, par
          exemple, c’est un genre où tu peux toujours trouver de nouvelles
          façons d’aborder un problème ou de créer de nouvelles combinaisons. Il
          y a les RPG comme Pokemon ou Inazuma Eleven où l’on crée nos propres
          équipes ou encore Yu-Gi-OH Duel Master où l’on crée notre propre Deck
          pour faire face aux stratégies de notre adversaire.”
        </Section>
      </div>
      <Table />
    </Slide>
  );
};

export default PageTwo;
