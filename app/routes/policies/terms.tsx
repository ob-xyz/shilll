import logo from "~/../public/img/ja1.png";
import bg from "~/../public/img/bg.jpg";
import bg1 from "~/../public/img/bg1.jpg";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content-aboutus2">
        <h2><span>Staying informed is hard.</span><br />We make it easy.</h2>
        <p>Jeffamazon is a daily newsletter for go-getters who like to stay informed about the business world.</p>
      </div>
      <div className="content-aboutus3">
      <div className="header">
        <h4>GETTING STARTED</h4>
        <h3>Start your journey with Jeffamazon.</h3>
      </div>
              <div className="grid">
          <div className="box">
            <img src={bg} alt="Sign up free" />
            <h1>Sign up for free</h1>
            <p>
              Sign up for free to get the business world delivered straight to your inbox every day of the week.
            </p>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Sign up</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
      </div>
      <div className="box">
        <img src={bg1} />
        <h1>Advertise with us</h1>
        <p>Jeffamazon helps you diversify your brand by placing your content where people do business — the email inbox. <br /><br />Get started today by promoting just one of your existing LinkedIn, Instagram, Facebook, or X posts.</p>
        <a href="mailto:chris@jeffamazon.com" className="pricebtn">
            Start a campaign
        </a>
      </div>
      </div>
      </div>
  </div>
  );
}