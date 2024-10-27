import LeftImgBlock from "../LeftImgBlock";
import MiddleImgBlock from "../MiddleImgBlock";
import RightImgBlock from "../RightImgBlock";
import Slide from "../Slide";

const PageSix = () => {
  return (
    <Slide backgroundImage="/assets/kidicarus.jpg">
      <div className="relative flex items-start top-16">
        <MiddleImgBlock
          imgGif="/assets/tekken.gif"
          imgFix="/assets/tekken_fix.jpg"
        >
          Pour ce qui est des jeux de combat, <strong>Tekken 6</strong> reste
          son favori. “J’aime énormément les jeux de combat, mais Tekken 6 est
          celui qui sort du lot. C’est celui où j’ai passé le plus d’heures, que
          ce soit en solo ou en jouant avec ma famille.” Pour Lilian, Tekken 6
          symbolise ces moments de partage avec ses proches, renforçant
          l’importance de ce jeu dans ses souvenirs vidéoludiques.
        </MiddleImgBlock>
      </div>
      <div className="relative flex items-start top-16">
        <MiddleImgBlock
          imgGif="/assets/minecraft.gif"
          imgFix="/assets/minecraft_fix.jpg"
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
        </MiddleImgBlock>
      </div>
    </Slide>
  );
};

export default PageSix;
