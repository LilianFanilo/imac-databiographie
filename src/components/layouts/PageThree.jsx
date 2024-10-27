import Section from "../Section";
import Slide from "../Slide";
import Table from "../Table";

const PageThree = () => {
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
          fois des missions pour améliorer ses équipements. Je ne cherche plus
          de longues aventures, je suis plutôt pour des expériences qui
          m'offrent une rejouabilité ou des jeux multijoueurs pour passer du
          temps avec mes amis. Si l’histoire d’un jeu m'intéresse, j’aurais
          tendance à suivre un streamer ou un youtubeur plutôt que d’acheter le
          jeu.”
        </Section>
      </div>
      <Table />
    </Slide>
  );
};

export default PageThree;
