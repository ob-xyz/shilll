import logo from "~/../public/img/ja.png";
import type { LinksFunction } from "@remix-run/node";
import scroll from "~/style/scss/components/showscroll.css";
import Footer from "../../components/footer"

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
        <h2><span>Privacy Policy.</span><br />Effective: April 5, 2025.</h2>
       <p>Shilll respects your privacy and values your trust. This Privacy Policy (“Policy”) describes how we collect, use, and protect your information when you use our software platform and related services (the “Services”). This Policy explains what information we collect, why we collect it, and your rights regarding your information.</p>

<p>The Services covered by this Policy include:</p>

<ul>
  <li>the Shilll website and software applications;</li>
  <li>user accounts and related platform features;</li>
  <li>customer support and communications; and</li>
  <li>any other services that link to this Policy.</li>
</ul>

<p>This Policy is grouped into these sections:</p>

<ul>
  <li>about us and this Policy;</li>
  <li>information we collect;</li>
  <li>how we use information;</li>
  <li>when we disclose information to third parties; and</li>
  <li>your rights and choices.</li>
</ul>

<p>We encourage you to read this Policy carefully. If you have questions, please contact us at <a href="mailto:privacyrequest@shilll.com">privacyrequest@shilll.com</a>.</p>

<p>1. About This Policy And Us</p>

<p>(a) Who we are</p>

<p>Shilll, Inc. (“Shilll,” “we,” “our,” or “us”) operates the Services. This Policy supplements and is governed by our Terms of Service (“Terms”). Capitalized terms used but not defined in this Policy have the meanings provided in our Terms.</p>

<p>(b) When this Policy applies</p>

<p>This Policy applies when you access or use the Services. By using the Services, you acknowledge that you have read and understand this Policy.</p>

<p>We may update this Policy from time to time as our Services evolve. If we make material changes, we will update the Last Updated date and provide notice where required by applicable law.</p>

<p>(c) Third-party services</p>

<p>The Services may contain links to third-party websites, products, or services. This Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you use.</p>

<p>2. Information We Collect</p>

<p>(a) Information you provide</p>

<p>When you create an account, use the Services, or contact us, we may collect information you provide, including:</p>

<ul>
  <li>name;</li>
  <li>email address;</li>
  <li>account login information;</li>
  <li>company or organization information you choose to provide;</li>
  <li>communications you send to us; and</li>
  <li>any other information you voluntarily provide.</li>
</ul>

<p>We do not collect sensitive personal information unless required for a specific purpose and permitted by applicable law.</p>

<p>(b) Information collected automatically</p>

<p>When you use the Services, we may automatically collect technical information about your device and usage of the platform, including:</p>

<ul>
  <li>IP address;</li>
  <li>browser type and operating system;</li>
  <li>device information;</li>
  <li>pages and features accessed within the Services;</li>
  <li>usage activity and performance information; and</li>
  <li>logs used for security, debugging, and improving the Services.</li>
</ul>

<p>(c) Cookies and similar technologies</p>

<p>We use cookies and similar technologies to operate, secure, and improve the Services. These technologies may help us remember your preferences, understand usage patterns, and improve platform performance.</p>

<p>You may control cookies through your browser settings. Some features of the Services may not function properly if cookies are disabled.</p>

<p>3. How We Use Your Information</p>

<p>We use information we collect for the following purposes:</p>

<p>(a) To provide and operate the Services</p>

<ul>
  <li>Create and manage user accounts;</li>
  <li>Provide access to platform features;</li>
  <li>Authenticate users and maintain account security;</li>
  <li>Provide customer support; and</li>
  <li>Send transactional communications related to your account.</li>
</ul>

<p>(b) To communicate with you</p>

<ul>
  <li>Send account verification emails;</li>
  <li>Send password resets and security notifications;</li>
  <li>Notify you about changes to your account or the Services; and</li>
  <li>Respond to questions or requests.</li>
</ul>

<p>(c) To improve and protect the Services</p>

<ul>
  <li>Monitor performance and reliability;</li>
  <li>Detect and prevent fraud, abuse, and security issues;</li>
  <li>Analyze usage trends; and</li>
  <li>Develop and improve features.</li>
</ul>

<p>(d) To comply with legal obligations</p>

<ul>
  <li>Comply with applicable laws and regulations;</li>
  <li>Respond to lawful requests from authorities; and</li>
  <li>Protect our rights and the security of our users.</li>
</ul>

<p>4. Transactional Communications</p>

<p>Shilll may send transactional emails necessary to operate the Services, including account verification, password resets, account notifications, security alerts, and other service-related communications.</p>

<p>These emails are only sent to users who create accounts or otherwise interact with the Services. We do not buy, rent, or scrape email lists, and we do not send unsolicited commercial email.</p>

<p>5. Your Rights And Choices</p>

<p>Depending on where you live, you may have rights regarding your personal information, including the right to:</p>

<ul>
  <li>access the personal information we hold about you;</li>
  <li>request correction of inaccurate information;</li>
  <li>request deletion of your information where applicable;</li>
  <li>object to certain processing activities; and</li>
  <li>withdraw consent where processing is based on consent.</li>
</ul>

<p>To exercise your rights or ask questions about this Policy, contact us at <a href="mailto:privacyrequest@shilll.com">privacyrequest@shilll.com</a>.</p>      </div>

  </div>
  );
}