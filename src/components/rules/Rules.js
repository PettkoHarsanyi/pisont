import { Grid, Hidden, makeStyles } from "@material-ui/core"
import { BackButton } from "../other/BackButton"
import "./Rules.css"
import cards from "./../../gfx/cards.png"
import dices from "./../../gfx/dices.png"
import beer from "./../../gfx/beer.png"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
})

export function Rules(){
  const classes = useStyles();
  return(
    <>
    <BackButton/>
    <div className="Rules">
      <Grid container className="Container" justifyContent="center" style={{marginBottom:"10vh"}}>
        
        <Grid item md={4} xs={10}>
          <div className="Title-a">
            Pisont
          </div>
          <div className="Text-a">
            Az eredeti Pisont játékot 2 dobókockával játszák, ajánlottan legalább 3 emberrel. (Én iszonyat jót nevettem egy barátommal kettesben játszva is!)
          </div>
        </Grid>
        <Grid item md={6} xs={false} container justifyContent="center" alignContent="center"><Hidden mdDown><img src={cards} style={{width:"250px"}}/></Hidden></Grid>

        <Grid item md={5} xs={false} container justifyContent="flex-start" alignContent="center" style={{marginTop: "10vh"}}>
          <Hidden mdDown><img src={dices} style={{width:"300px"}}/></Hidden>
        </Grid>
        <Grid item md={4} xs={10} style={{marginTop:"10vh"}}>
          <div className="Text-a">
            A nulladik körben körbemegyünk, aki a legkevesebbet dobja két kockával, az kezd. A soron levö játékos dob a két kockával, dobásának értékét a két dobott szám összege fogja képezni.
          </div>
        </Grid>
        
        <Grid item md={4} xs={10} style={{marginTop:"10vh"}}>
          <div className="Text-a">
            Aki elöször dobja ki a 2+1-es (vagy 1+2-es) kombinációt, az lesz az elsö <i>Pisont</i>. <br/>Innentöl kezdve az összes dobásnál, amiben van 3-as, a Pisont iszik egy kortyot.<br/>Ha a Pisont bármelyik következö körében újra kidobja a 2+1 (1+2) kombinációt, akkor ö kétszeres Pisont lesz, ezáltal bármilyen 3-ast tartalmazó dobás esetén kétszeresen kell innia. (Ez így mehet tovább a végtelenségig, lehet háromszoros, százszoros Pisont is.)<br/>Természetesen, ha valaki más dob 2+1-et, akkor elszáll az elözö Pisont válláról az összes teher, új Pisont lesz.<br />Ha a Pisontnak pipilnie kell, vagy fel kell állnia a játéktól, akkor azt csak EKS-sel teheti. (Ital lehúzással.)
          </div>
        </Grid>
        <Grid item md={6} xs={false} container justifyContent="center" alignContent="center" style={{padding:"10vh"}}>
            <Hidden mdDown>
                <img src={beer} style={{width:"500px"}}/>
            </Hidden>
        </Grid>

        <Grid item md={4} xs={false} />
        <Grid item md={6} xs={10} style={{marginTop:"10vh"}}>

          <div className="Text-a">
            A játéknak vannak további nevezetes dobás kombinációi is. A nem nevezetes kombinációkra az azt dobó játékos tetszöleges szabályt találhat ki. (Pölö, aki kimondja az "igen" szót, az iszik egyet.)<br />Itt egy lista a nevezetes kombinációkról:
          </div>

        </Grid>

        <Grid item md={6} xs={10} style={{marginTop:"10vh", border:"1.5vh solid white", borderRadius:"4vh", padding:"0 3vh 5vh 3vh", textAlign:"center"}} className="Text-a Box">
          <div className="SubTitle-a">1+1</div>
          <div className="Text-b">A "Legszánalmasabb Dobás": a dobó játékos egy kortyot kénytelen inni.</div>

          <div className="SubTitle-a">2+1</div>
          <div className="Text-b">Az új Pisont tiszteletére minden játékos iszik 1 kortyot.</div>
          
          <div className="SubTitle-a">2+2 / 3+3 / 4+4 ...</div>
          <div className="Text-b">A megegyezö értékeknél a dobó játékos "felez", azaz az egyik kocka értékét kiosztja egy tetszölegesen választott játékostársának, a másik felét megissza ö maga.</div>
          
          <div className="SubTitle-a">3+1</div>
          <div className="Text-b">Ha van Pisont, akkor a szorzójának megfelelö számú kortyot iszik</div>
          
          <div className="SubTitle-a">3+2</div>
          <div className="Text-b">A dobót megelözö játékos iszik 1 kortyot.<br/>Ha van Pisont, akkor a szorzójának megfelelö számú kortyot iszik</div>
          
          <div className="SubTitle-a">3+3</div>
          <div className="Text-b">Minden játékos gyorsan megfogja az orrát, a dobó dönti el, ki volt a leglassabb, arra oszt 1 kortyot.<br/>Megegyezö értékek, tehát a dobó a felét megissza, a felét kiosztja.<br/>Ha van Pisont, akkor a szorzójának kétszerese számú kortyot iszik (Mivel két 3-ast dobott)</div>
          
          <div className="SubTitle-a">3+4</div>
          <div className="Text-b">A dobót követö játékos iszik 1 kortyot.<br/>Ha van Pisont, akkor a szorzójának megfelelö számú kortyot iszik.</div>
          
          <div className="SubTitle-a">4+1</div>
          <div className="Text-b">A dobót megelözö játékos iszik 1 kortyot.</div>

          <div className="SubTitle-a">4+2</div>
          <div className="Text-b">Minden játékos gyorsan megfogja az orrát, a dobó dönti el, ki volt a leglassabb, arra oszt 1 kortyot.</div>

          <div className="SubTitle-a">4+4</div>
          <div className="Text-b">Megegyezö értékek, tehát a dobó a felét megissza, a felét kiosztja.</div>

          <div className="SubTitle-a">5+1</div>
          <div className="Text-b">Ugyanaz erre a szabály, mint a 4+2-re.</div>

          <div className="SubTitle-a">5+2</div>
          <div className="Text-b">Ugyanaz erre a szabály, mint a 4+3-ra.</div>

          <div className="SubTitle-a">5+5</div>
          <div className="Text-b">Minden játékos 1 kortyot iszik a legkerekebb dobás tiszteletére.<br/>Megegyezö értékek, tehát a dobó a felét megissza, a felét kiosztja.</div>

          <div className="SubTitle-a">6+6</div>
          <div className="Text-b">Megegyezö értékek, tehát a dobó a felét megissza, a felét kiosztja.</div>

          <div className="SubTitle-a">A maradék kombinációkra új szabályokat lehet hozni.</div>
          <div className="Text-b">Pölö: 1+6 | 2+6 | 3+5 (Pisont iszik + Új szabály) | 3+6 (Pisont iszik + Új szabály ) | 4+5 | 4+6 | 5+4 | 5+6 | 6+3 (Pisont iszik + Új szabály)</div>
        </Grid>
      </Grid>
    </div>
    </>
  )
}