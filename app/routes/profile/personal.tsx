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
            <h4>PERSONAL</h4>
            <h1>Start your profile ✨</h1>
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
      <h2>Build your career with <span>Shilll</span></h2>
        <Link className="text" to="/profile/personal">Shilll's mission is to give every builder a taste of entrepreneurship.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Right now companies want real builders who love making things, and they're not afraid to pay world-class compensation to hire them.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">But compensation is complex. Everyone wants wildly different things. Your stage in life matters. Are you setting goals? Or looking for more options.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">At Shilll we help you build things you'll remember. Get one number that representats your total compensation and use sliders to mix between cash, RSUs, and stock options.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Saving for a down payment?</span> Go all cash.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Willing to bet on yourself?</span> Up the equity.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Want more options?</span> You know what to do.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">It's the pefect fit for seasoned builders, solo entrepreneurs, and small teams who care about spending the best years of their career building something people love while getting world-class compensation to do it.</Link>      
        </div>
    </div>
  );
}