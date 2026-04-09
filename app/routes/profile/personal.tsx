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
            <h1>Create your profile</h1>
          </div>
            <form method="post" action="https://app.jeffamzn.com/subscription/form">
              <input className="email mb" type="text" name="firstName" placeholder="First Name *" />
              <input className="email mb" type="text" name="lastName" placeholder="Last Name *" />
            <div className="input-wrapper">
              <input className="email" type="email" name="email" required placeholder="Email Address *" />
              <button className="submit" type="submit">Submit</button>
            </div>
            <Altcha />
              <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
            <input type="hidden" name="nonce" />
          </form>
        </div>
      </div>
    </div>
  );
}