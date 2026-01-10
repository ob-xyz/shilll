import logo from "~/../public/img/ja1.png";
import bluecheck from "~/../public/img/bluecheck.png";
import goldcheck from "~/../public/img/goldcheck.png";
import graycheck from "~/../public/img/graycheck.png";
import blackcheck from "~/../public/img/blackcheck.png";

export default function Index() {
return (
    <div className="content-verification">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content-verification2">
        <h1>About checkmarks in the Jeffamazon newsletter.</h1>
        <p>Jeffamazon applies checkmarks as visual identity signals on account profiles to provide more context about—and help distinguish—different types of profiles. All of these indicators are applied by Jeffamazon, not the profile holder.</p>
        <div className="box">
        <h2>Blue checkmark</h2>
        <p>The blue checkmark means that a account is a real person who meets our eligibility requirements. These accounts typically always represent an individual and have under gone review and confirmation that confirms they meet the authentic content and people standards we ahere to.</p>
        <img src={bluecheck} alt="Checkmark" />
        </div>

        <div className="box">
        <h2>Gold checkmark</h2>
        <p>The gold checkmark indicates that the account is an official organization, company, or business.</p>
        <img src={goldcheck} alt="Checkmark" />
        </div>

        <div className="box">
        <h2>Gray checkmark</h2>
        <p>The gray checkmark indicates that an account represents a government organization or is an official government representative.</p>
        <img src={graycheck} alt="Checkmark" />
        </div>

        <div className="box">
        <h2>Black checkmark</h2>
        <p>The black checkmark indicates that an account is anonymous, pseudonymous, or a parody.</p>
        <img src={blackcheck} alt="Checkmark" />
        </div>
      </div>
  </div>
  );
}