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
      <h2>Empower individuals in your company to be the master of their own destiny with <span>Shilll</span></h2>
        <Link className="text" to="/profile/personal">Shilll's mission is to empower individuals at world-class companies.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">When it comes to being an entrepreneur getting started is always the hardest part. At Shilll we're making it easy for you to give individuals a taste of entrepreneurship without having to risk it all.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Right now you're not afraid to pay world-class compensation to hire individual engineers, builders, and contributors who can make things.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">But compensation is complex. Everyone wants wildly different things. It makes hiring hard.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">At Shilll we make it easy for you to empower individuals to be the master of their own destiny by giving people a single number of total compensation that they can mix between cash, RSUs, and options.</Link>
        </div>
    </div>
  );
}