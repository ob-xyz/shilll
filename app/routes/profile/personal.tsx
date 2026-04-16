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
            <h1>Get in touch</h1>
          </div>
            <form method="post" action="https://app.jeffamzn.com/subscription/form">
              <div className="input-wrapper1">
                <input className="email" type="text" name="firstName" placeholder="Your Name *" />
              </div>
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
                <button className="submit" type="submit">Submit</button>
              </div>
              <Altcha />
              <input id="82687" type="hidden" name="l" checked value="82687238-ae68-46c7-98ad-183fbf4cfea0" />
              <input type="hidden" name="nonce" />
            </form>
        </div>
      </div>
    </div>
  );
}