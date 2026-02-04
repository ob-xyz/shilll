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
      <h2>Be the master of your own destiny with <span>Shilll</span></h2>
        <Link className="text" to="/profile/personal">Life's definitely not static, so why should your compensation be?</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Every day your financial needs change. One quarter you might be saving for a home, the next, you're chasing more equity upside. Most companies trap you into a rigid compensation plan determined by your start date.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Shilll gives you access to <span>choice-based compensation</span> that allows you to adjust your rewards to match your life.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Get dynamic allocation access with quarterly windows to rebalance your pay.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Lock in immediate value by skipping the 1-year cliff and vesting as you work.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Enjoy total transparency over how your choices affect your net worth with a real-time valuation of RSUs and options.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Saving for a down payment?</span> Go all cash.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Want to bet on yourself?</span> Up the equity.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Need more options?</span> You're in control.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">At Shilll we believe you deserve the same level of agency that the world's top founders get.</Link>
        </div>
    </div>
  );
}