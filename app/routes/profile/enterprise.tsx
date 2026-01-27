import { Link } from "@remix-run/react";
import Altcha from "../../components/altcha";

import logo from "~/../public/img/ja1.png";

export default function Index() {
  return (
    <div className="adform-container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>ENTERPRISE</h4>
            <h1>Start an enterprise profile ✨</h1>
          </div>
          <form method="post" action="https://app.jeffamzn.com/subscription/form">
            <div className="input-wrapper">
              <input className="email" type="text" name="firstName" required placeholder="First Name *" />
              <input className="email" type="text" name="lastName" required placeholder="Last Name *" />
              <input className="email" type="text" name="company" required placeholder="Company *" />
              <input className="email" type="text" name="role" required placeholder="Job Title *" />
              <input className="email" type="email" name="email" required placeholder="Email Address *" />
              <button className="submit" type="submit">Create profile</button>
            </div>
            <Altcha />
            <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
            <input type="hidden" name="nonce" />
          </form>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Unleash your upside with <span>Shilll</span></h2>
        <Link className="text" to="/profile/enterprise">Shilll's mission is unleashing every builders upside.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">Right now you want to hire world-class builders, and you're not afraid to pay top-tier compensation to make it happen.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">But compensation is complex. Everyone wants wildly different things. It depends on what stage of life people are in. What their interests are. And the goals they set or the plans they change.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">At Shilll we simplify compensation by giving you a single number of total compensation you can offer builders to contribute to your company, project, and ideas. Then we give sliders to builders who can mix your total compensation number to fit their goals.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder"><span>Saving for a down payment?</span> Go all cash.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder"><span>Willing to bet on yourself?</span> Up the equity.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder"><span>Want more options?</span> You know what to do.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">Shilll is a perfect fit for enterprises who care about attracting the best builders in the world.</Link>      
        </div>
    </div>
  );
}