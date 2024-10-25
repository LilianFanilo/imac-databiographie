import LeftImgBlock from "../LeftImgBlock";
import RightImgBlock from "../RightImgBlock";
import Section from "../Section";
import Slide from "../Slide";
/*Ne pas enlever cette ligne*/
import { Chart as ChartJS, Colors } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const PageFour = () => {
  return (
    <Slide backgroundImage="/src/assets/ssbu.jpg">
      <div className="flex flex-col gap-y-4">
        <LeftImgBlock
          imgGif="/src/assets/icarus.gif"
          imgFix="/src/assets/icarus_fix.jpg"
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
        <RightImgBlock
          imgGif="/src/assets/tekken.gif"
          imgFix="/src/assets/tekken_fix.jpg"
        >
          Pour ce qui est des jeux de combat, <strong>Tekken 6</strong> reste
          son favori. “J’aime énormément les jeux de combat, mais Tekken 6 est
          celui qui sort du lot. C’est celui où j’ai passé le plus d’heures, que
          ce soit en solo ou en jouant avec ma famille.” Pour Lilian, Tekken 6
          symbolise ces moments de partage avec ses proches, renforçant
          l’importance de ce jeu dans ses souvenirs vidéoludiques.
        </RightImgBlock>
        <LeftImgBlock
          imgGif="/src/assets/minecraft.gif"
          imgFix="/src/assets/minecraft_fix.jpg"
        >
          Enfin, <strong>Minecraft</strong> est sans doute l’un des jeux les
          plus emblématiques de son adolescence. “Minecraft est un
          incontournable pour moi. Il m’a accompagné pendant une grande partie
          de mon adolescence, et c’est l’un des rares jeux que j’ai partagé avec
          toutes les personnes que je connaissais, amis et famille.” Ce jeu de
          construction sans fin, qui a su captiver des millions de joueurs à
          travers le monde, a également une place particulière dans la vie de
          Lilian. Même aujourd’hui, il continue à suivre l’évolution du jeu à
          travers les vidéos et le contenu en ligne. “C’est un jeu que je ne me
          lasse jamais de suivre, même si je n’y joue plus autant qu’avant.”
        </LeftImgBlock>
      </div>
      <div>
        <Section title="Et maintenant ?">
          Lilian Peuron a vu sa fréquence de jeu évoluer au fil des années,
          influencée par ses obligations, ses études, et les événements
          marquants de sa vie. Durant le collège, les jeux vidéo occupaient une
          place centrale dans ses journées. “Dès que la journée de cours était
          finie, je rentrais chez moi pour allumer mon PC. Que ce soit pour
          jouer seul ou en ligne avec mes amis, c’était presque une routine
          quotidienne.” À cette époque, les jeux vidéo représentaient non
          seulement un divertissement, mais aussi un moyen de décompresser après
          les cours et de rester connecté avec son groupe d’amis. La pandémie de
          COVID-19 a marqué un tournant décisif dans sa relation avec les jeux
          vidéo, notamment en ce qui concerne le temps qu’il y consacrait. “Sans
          hésiter, je pense que c’était la période où j’ai le plus joué de toute
          ma vie. Avec les confinements, le monde semblait s’arrêter, mais pour
          moi, c’était une opportunité de me plonger à fond dans les jeux. La
          situation était difficile pour beaucoup de gens, mais honnêtement, je
          n’ai jamais été aussi content de rester chez moi” avoue-t-il.
          Cependant, aujourd'hui, la fréquence de jeu a considérablement
          diminué. “Maintenant, avec mes études, je suis plus fatigué, et j’ai
          pris l’habitude de me détendre autrement, en regardant des streams ou
          des vidéos sur YouTube plutôt qu’en jouant. C’est devenu une forme de
          relaxation passive que je préfère après une journée chargée.” Lilian
          admet que ses priorités ont changé et que ses études l'ont amené à
          privilégier d’autres formes de divertissement. Cela dit, il n’a pas
          totalement abandonné le jeu vidéo. Lors des vacances, Lilian retrouve
          parfois le plaisir de jouer, mais sous une autre forme : “C’est
          surtout pendant les vacances que je reprends un peu la manette ou que
          je me mets à jouer à mes jeux mobiles.” Les jeux sur smartphone,
          souvent plus accessibles et adaptés à des sessions courtes, lui
          permettent de retrouver un plaisir de jeu, sans pour autant s’investir
          dans de longues sessions comme avant. En résumé, d’un investissement
          intense durant le collège et la pandémie, à une relation plus modérée
          aujourd’hui, marquée par des périodes de pause et de détente pendant
          ses vacances, la fréquence de jeu de Lilian a suivi l’évolution de sa
          vie. Bien que ses habitudes aient changé, sa passion pour les jeux
          vidéo reste intacte, même si elle se manifeste désormais de manière
          différente.
        </Section>
        <div className="flex justify-center h-64 p-5 mt-2 align-middle bg-white rounded font-poppins">
          <Line
            data={{
              labels: [
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
              ],
              datasets: [
                {
                  label: "Heures de jeu/semaine",
                  data: [
                    0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 3,
                    3, 2,
                  ],
                  backgroundColor: "blue",
                  borderColor: "blue",
                },
              ],
            }}
          />
        </div>
        <span className="text-sm italic font-semibold 2xl:text-xl">
          Graphique de l'évolution du temps de jeu de Lilian Peuron
        </span>
      </div>
    </Slide>
  );
};

export default PageFour;
