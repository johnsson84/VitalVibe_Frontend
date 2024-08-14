import "./About.css";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { useContext } from "react";

const About = () => {
  const { style } = useContext(ThemeColorContext);

  return (
    <div style={style} className="aboutPage">
      <div className="aboutCreators">
        <h1 id="AboutTitle">Skapare</h1>
        <p id="aboutName">John Gunnarsson</p>
        <p id="aboutName">Viktor Nyberg</p>
        <p id="aboutName">Johan Johnsson</p>
      </div>
      <div className="aboutVitalVibe">
        <h1 id="AboutTitle"> Om VitalVibe</h1>
        <p>VitalVibe är en hälsoapp där man kan logga sin träning och kost, delta i utmaningar.</p>
      </div>
      <div className="aboutPurpose">
        <h1 id="AboutTitle">Syfte</h1>
        <p>VitalVibe är ett sommarprojekt där vi hade möjlighet att fortsätta utveckla våra kunskaper vi redan fått från skolan, fortsätta att träna som ett team med planering på Github.</p>
      </div>
    </div>
  );
};

export default About;
