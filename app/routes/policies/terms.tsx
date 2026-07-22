import logo from "~/../public/img/ja.png";
import type { LinksFunction } from "@remix-run/node";
import scroll from "~/style/scss/components/showscroll.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
];
export default function Index() {
return (
    <div className="content-privacy">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content-privacy2">
        <h2><span>Terms and Conditions.</span><br />Effective: July 22, 2026.</h2>

<p>These Terms and Conditions (“Terms”) govern your access to and use of the Shilll platform and related services (the “Services”). By accessing or using the Services, you agree to be bound by these Terms.</p>

<p>If you do not agree to these Terms, you may not access or use the Services.</p>

<p>1. About Shilll</p>

<p>(a) Who we are</p>

<p>Shilll, Inc. (“Shilll,” “we,” “our,” or “us”) provides software products and services through the Services. These Terms establish the rules and conditions for using our platform.</p>

<p>(b) Changes to these Terms</p>

<p>We may update these Terms from time to time as our Services evolve. If we make material changes, we will update the Effective date above and provide notice where required.</p>

<p>Your continued use of the Services after changes become effective means you accept the updated Terms.</p>

<p>2. Accounts</p>

<p>You may need to create an account to access certain features of the Services.</p>

<ul>
  <li>You must provide accurate and complete information when creating an account.</li>
  <li>You are responsible for maintaining the security of your account credentials.</li>
  <li>You are responsible for all activity that occurs under your account.</li>
  <li>You must notify us if you believe your account has been compromised.</li>
</ul>

<p>You must be legally capable of entering into these Terms to use the Services.</p>

<p>3. Using The Services</p>

<p>You may use the Services only for lawful purposes and in accordance with these Terms.</p>

<p>You agree not to:</p>

<ul>
  <li>use the Services to violate applicable laws or regulations;</li>
  <li>attempt to gain unauthorized access to the Services or related systems;</li>
  <li>interfere with the security, reliability, or performance of the Services;</li>
  <li>reverse engineer, copy, or attempt to extract source code from the Services except where permitted by law;</li>
  <li>use the Services to transmit malicious code, spam, or abusive content.</li>
</ul>

<p>We reserve the right to investigate suspected violations and take appropriate action.</p>

<p>4. Payments And Subscriptions</p>

<p>If you purchase paid features or subscriptions, you agree to provide accurate billing information and authorize us or our payment providers to process applicable charges.</p>

<ul>
  <li>Fees are displayed before purchase.</li>
  <li>Payments are non-refundable except where required by law or stated otherwise.</li>
  <li>Subscriptions may automatically renew unless cancelled before the renewal date.</li>
</ul>

<p>We may change pricing or introduce new paid features by providing reasonable notice.</p>

<p>5. Intellectual Property</p>

<p>The Services, including software, design, branding, content, and related materials, are owned by Shilll or its licensors and are protected by applicable intellectual property laws.</p>

<p>We grant you a limited, non-exclusive, non-transferable right to access and use the Services for their intended purpose.</p>

<p>You may not copy, modify, distribute, sell, or exploit any part of the Services without our prior written permission.</p>

<p>6. User Content</p>

<p>If you submit, upload, or provide content through the Services (“User Content”), you retain ownership of your User Content.</p>

<p>You grant Shilll a limited license to use User Content only as necessary to provide, maintain, and improve the Services.</p>

<p>You are responsible for ensuring that your User Content does not violate applicable laws or the rights of others.</p>

<p>7. Communications</p>

<p>We may send you service-related communications, including account verification emails, security notifications, product updates, and other messages necessary to operate the Services.</p>

<p>You may manage optional communications through available settings or by contacting us.</p>

<p>8. Third-Party Services</p>

<p>The Services may integrate with third-party services. Your use of third-party services is governed by their own terms and policies.</p>

<p>Shilll is not responsible for third-party services or their availability.</p>

<p>9. Termination</p>

<p>You may stop using the Services at any time.</p>

<p>We may suspend or terminate access to the Services if you violate these Terms, create risk for other users, or misuse the Services.</p>

<p>Upon termination, your right to use the Services will immediately end.</p>

<p>10. Disclaimers</p>

<p>The Services are provided on an “as available” basis. To the maximum extent permitted by law, Shilll does not guarantee that the Services will always be uninterrupted, secure, or error-free.</p>

<p>We disclaim all warranties not expressly stated in these Terms.</p>

<p>11. Limitation Of Liability</p>

<p>To the maximum extent permitted by law, Shilll will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</p>

<p>Our total liability for any claim relating to the Services will not exceed the amount you paid to Shilll during the twelve months before the event giving rise to the claim.</p>

<p>12. Privacy</p>

<p>Your use of the Services is also governed by our Privacy Policy, which explains how we collect and use information.</p>

<p>13. Contact</p>

<p>If you have questions about these Terms, contact us at:</p>

<p><a href="mailto:support@shilll.com">support@shilll.com</a></p>
      </div>
  </div>
  );
}