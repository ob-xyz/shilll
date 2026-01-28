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
      <h2>Hire the world's best builders with <span>Shilll</span></h2>
        <Link className="text" to="/profile/enterprise">Shilll's mission is to give every builder a taste of entrepreneurship.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/enterprise">Right now you want to hire the world's best builders, and you're not afraid to pay top-tier compensation to make it happen.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/enterprise">But compensation is complex. Everyone wants wildly different things. Everyone's stage in life matters. Are high-performance people setting goals? Or looking for more options.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/enterprise">At Shilll we help you hire builders you'll remember. By giving you one number that representats the total compensation you set for a role and potential hires the ability to use sliders to mix between cash, RSUs, and stock options. Quickly becomes the #1 way to attract high-performance people who love to build things.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/enterprise">Shilll is a perfect fit for enterprises who care about attracting the world's best builders.</Link>      
        </div>
    </div>
  );
}