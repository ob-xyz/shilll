var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-YA2ENNNA.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "shilll : You're all caught up",
  description: "Get the daily conversations that matter to you.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "color-scheme", content: "light dark" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "meta",
        {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "meta",
        {
          name: "theme-color",
          content: "#050505",
          media: "(prefers-color-scheme: dark)"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Privacy,
  links: () => links2,
  meta: () => meta2
});

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-TIBVGSKV.css";

// app/components/legal-page.tsx
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// public/img/ja.png
var ja_default = "/build/_assets/ja-RZF5NXX6.png";

// app/components/legal-page.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function LegalPage({
  title,
  effective,
  toc: toc3,
  children
}) {
  let [showStickyNav, setShowStickyNav] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    let handleScroll = () => setShowStickyNav(window.scrollY > 50);
    return handleScroll(), window.addEventListener("scroll", handleScroll, { passive: !0 }), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "content-privacy", id: "top-of-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `sticky-nav${showStickyNav ? " visible" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { className: "sticky-logo", to: "/", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: ja_default, alt: "The Poast", loading: "lazy", decoding: "async" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/subscribe", className: "sticky-subscribe", children: "Sign Up" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/", className: "logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: ja_default, alt: "The Poast Logo" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
          title,
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
        "Effective: ",
        effective,
        "."
      ] }),
      toc3 && toc3.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "legal-toc", "aria-label": "On this page", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "legal-toc-label", children: "On this page" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ol", { children: toc3.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: `#${item.id}`, children: item.label }) }, item.id)) })
      ] }),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: "legal-top", href: "#top-of-page", children: "Back to top \u2191" })
    ] })
  ] });
}

// app/routes/policies/privacy.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
], meta2 = () => ({
  title: "Privacy Policy |: The Poast",
  description: "How The Poast collects, uses, and protects your information, and the choices you have."
}), toc = [
  { id: "about", label: "About this Policy and us" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use your information" }
];
function Privacy() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(LegalPage, { title: "Privacy Policy", effective: "April 5, 2025", toc, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { id: "top-of-page", children: "The Poast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "websites, The Poast Store, paid products" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "newsletters and other disseminated content" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "merchandise, mobile apps and related social media pages" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "anywhere else we gather information about you and refer to this Policy." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "This Policy is grouped into these sections:" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "about us and this Policy;" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "information we collect;" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "how we use information, including for advertising purposes;" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "your rights and how to exercise them." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
      "We encourage you to read this Policy carefully. If you have questions, please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "section-title", id: "about", children: "1. About This Policy And Us" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(a) Who we are" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "The Poast, Inc. (\u201CThe Poast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(b) When this Policy applies" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
        "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(c) Location-specific sections" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
      "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D:",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }),
      "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Canadian residents should consult the Canadian users section." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
      "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
      " ",
      "if you have questions about your rights under other data privacy laws."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "section-title", id: "collect", children: "2. Information We Collect" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(a) Information you provide" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Purchase our Offerings or services" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Contact or communicate with us" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Sign up or opt-in to our newsletters, alerts, or other communications" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Participate in a contest or promotion or redeem a prize" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "For instance, if you make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(b) Information collected when you use the Services" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with The Poast Store products." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "legal-callout", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "legal-callout-title", children: "Managing cookies and similar technologies" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "ACCEPT ALL COOKIES;" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(c) Information we generate" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "section-title", id: "use", children: "3. How We Use Your Information" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(a) To provide our content, services and products to you" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Deliver content you request" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Provide you with customer support and respond to your requests" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Complete your orders" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Communicate with you about our services" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(b) To manage your subscriptions or fulfill product orders" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Manage your content subscriptions" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Deliver and process payments for Offerings you order" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(c) To improve our services and develop new ones" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Administer focus groups, market studies and surveys" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Review interactions with customer teams to improve our quality of service" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Develop new content and services" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(d) To allow personalized ads and create audiences for third-party advertisers" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Communicate with you about products or services that we believe may interest you" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(f) To create broader findings with aggregate and deidentified data" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(g) To ensure legal compliance" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Verify copyright or IP claims" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Comply with legal requirements" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Assist law enforcement" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "sub-title", children: "(h) Purposes" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("u", { children: "Commercial purposes" }),
        ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("u", { children: "Business purposes" }),
        ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("u", { children: "Comply with applicable laws and regulations" }),
        ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("u", { children: "Consent" }),
        ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
        "."
      ] })
    ] })
  ] });
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Terms,
  links: () => links3,
  meta: () => meta3
});
var import_jsx_runtime5 = require("react/jsx-runtime"), links3 = () => [
  { rel: "stylesheet", href: showscroll_default }
], meta3 = () => ({
  title: "Terms and Conditions : The Poast",
  description: "The terms that govern your use of The Poast websites, newsletters, and products."
}), toc2 = [
  { id: "about", label: "About this Policy and us" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use your information" }
];
function Terms() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(LegalPage, { title: "Terms and Conditions", effective: "April 5, 2025", toc: toc2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "The Poast respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "websites, The Poast Store, paid products" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "newsletters and other disseminated content" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "merchandise, mobile apps and related social media pages" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "anywhere else we gather information about you and refer to this Policy." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "This Policy is grouped into these sections:" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "about us and this Policy;" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "information we collect;" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "how we use information, including for advertising purposes;" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "your rights and how to exercise them." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
      "We encourage you to read this Policy carefully. If you have questions, please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
      "."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "section-title", id: "about", children: "1. About This Policy And Us" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(a) Who we are" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "The Poast, Inc. (\u201CThe Poast,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(b) When this Policy applies" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { children: [
        "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(c) Location-specific sections" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
      "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D:",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }),
      "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Canadian residents should consult the Canadian users section." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
      "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
      " ",
      "if you have questions about your rights under other data privacy laws."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "section-title", id: "collect", children: "2. Information We Collect" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(a) Information you provide" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Purchase our Offerings or services" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Contact or communicate with us" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Participate in a contest or promotion or redeem a prize" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "For instance, if you make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(b) Information collected when you use the Services" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with The Poast Store products." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "legal-callout", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "legal-callout-title", children: "Managing cookies and similar technologies" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { children: "WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { children: "ACCEPT ALL COOKIES;" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(c) Information we generate" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "section-title", id: "use", children: "3. How We Use Your Information" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(a) To provide our content, services and products to you" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Deliver content you request" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Provide you with customer support and respond to your requests" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Complete your orders" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Communicate with you about our services" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(b) To manage your subscriptions or fulfill product orders" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Manage your content subscriptions" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Deliver and process payments for Offerings you order" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(c) To improve our services and develop new ones" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Administer focus groups, market studies and surveys" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Review interactions with customer teams to improve our quality of service" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Develop new content and services" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(d) To allow personalized ads and create audiences for third-party advertisers" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Communicate with you about products or services that we believe may interest you" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(f) To create broader findings with aggregate and deidentified data" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(g) To ensure legal compliance" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Verify copyright or IP claims" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Comply with legal requirements" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Assist law enforcement" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { className: "sub-title", children: "(h) Purposes" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("u", { children: "Commercial purposes" }),
        ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("u", { children: "Business purposes" }),
        ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("u", { children: "Comply with applicable laws and regulations" }),
        ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("u", { children: "Consent" }),
        ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
      "Questions about these terms? Contact us at",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "mailto:privacyrequest@thepoast.com", children: "privacyrequest@thepoast.com" }),
      "."
    ] })
  ] });
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => Subscribe,
  links: () => links4,
  meta: () => meta4
});
var import_react6 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react5 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react5.useState)(!1);
  return (0, import_react5.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "altcha-widget",
    {
      challengeurl: "https://app.thepoast.com/api/public/captcha/altcha",
      hidefooter: "true",
      hidelogo: "true"
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { height: "80px" } });
}

// app/style/scss/subscribe.css
var subscribe_default = "/build/_assets/subscribe-J2F5OVIT.css";

// app/routes/subscribe.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), links4 = () => [
  { rel: "stylesheet", href: subscribe_default }
], meta4 = () => ({
  title: "Subscribe : The Poast",
  description: "Get the daily conversations that matter to you."
});
function Subscribe() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "subscribe-page", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("main", { className: "subscribe-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Link, { to: "/", className: "subscribe-logo", "aria-label": "The Poast home", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: ja_default, alt: "The Poast" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "subscribe-title", children: "Sign up for free" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "subscribe-sub", children: "Get the daily conversations that matter to you." }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "subscribe-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "subscribe-email", className: "sr-only", children: "Email address" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              {
                id: "subscribe-email",
                className: "subscribe-input",
                type: "email",
                name: "email",
                required: !0,
                autoComplete: "email",
                inputMode: "email",
                placeholder: "Email Address *"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "subscribe-submit", type: "submit", children: "Sign Up" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "subscribe-altcha", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AltchaWrapper, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "input",
            {
              id: "6d48f",
              type: "hidden",
              name: "l",
              value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "hidden", name: "nonce" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "subscribe-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Link, { className: "sm", to: "/policies/terms", children: "Terms" }),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Link, { className: "sm", to: "/policies/privacy", children: "Privacy Policy" }),
            "."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Link, { to: "/", className: "subscribe-back", children: "Read today\u2019s edition first \u2192" })
  ] }) });
}

// app/routes/confirm.tsx
var confirm_exports = {};
__export(confirm_exports, {
  default: () => Confirm
});
var import_react7 = require("@remix-run/react");

// public/img/ja6.png
var ja6_default = "/build/_assets/ja6-UFKBF2CN.png";

// app/routes/confirm.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Confirm() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: ja_default, alt: "The Poast Logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { style: { fontSize: 52 }, children: "\u2713" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { style: { fontSize: 30, textAlign: "center" }, children: "Welcome back to The Poast" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      "Thanks for giving us a second shot :)"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      "Expect our fast feed in your inbox every day. It stitches together the best business-minded news, posts, and snarky comments from across the web. You can check out the latest issue ",
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Link, { to: "/live", children: "here \u2192" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("em", { children: `P.S. If you don't receive an email, please check your spam or promotions folder and "move us" to your primary inbox to ensure you get The Poast each day.` })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      "See you soon!"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { style: { fontSize: 18, textAlign: "left" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      "\u2014The Poast",
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { className: "headerimg", src: ja6_default, alt: "The Poast" })
  ] }) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5,
  loader: () => loader
});
var import_react8 = require("react"), import_react9 = require("@remix-run/react"), import_node = require("@remix-run/node");
var import_jsx_runtime9 = require("react/jsx-runtime"), links5 = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], LIVE_CAMPAIGN_ID = 1, CONTENT_TTL_MS = 30 * 1e3, cachedIssue = null;
function issueResponse(issue) {
  return (0, import_node.json)(
    { issue },
    {
      headers: {
        "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=86400"
      }
    }
  );
}
async function fetchWithTimeout(url, options, timeout = 3e3) {
  let controller = new AbortController(), timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function fetchCampaignPreviewHtml(id, headers) {
  let response = await fetchWithTimeout(
    `https://app.thepoast.com/api/campaigns/${id}/preview`,
    { headers },
    3e3
  );
  return response && response.ok ? await response.text() : "";
}
function formatGoDate(date, layout) {
  let pad = (value) => String(value).padStart(2, "0"), monthNamesLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], weekdayLong = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], weekdayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), weekday = date.getDay(), tokens = [
    ["Monday", weekdayLong[weekday]],
    ["January", monthNamesLong[month - 1]],
    ["2006", String(year)],
    ["Mon", weekdayShort[weekday]],
    ["Jan", monthNamesShort[month - 1]],
    ["06", pad(year % 100)],
    ["02", pad(day)],
    ["01", pad(month)],
    ["2", String(day)],
    ["1", String(month)]
  ], result = "", i = 0;
  outer:
    for (; i < layout.length; ) {
      for (let [token, value] of tokens)
        if (layout.startsWith(token, i)) {
          result += value, i += token.length;
          continue outer;
        }
      result += layout[i], i += 1;
    }
  return result;
}
function resolveTemplateTags(html, referenceDate) {
  return html.replace(
    /\{\{\s*Date\s+"([^"]*)"\s*\}\}/gi,
    (_match, layout) => {
      try {
        return formatGoDate(referenceDate, layout);
      } catch {
        return "";
      }
    }
  ).replace(/\{\{[\s\S]*?\}\}/g, "");
}
function prepareIssueHtml(html = "", referenceDate) {
  if (!html)
    return "";
  let resolved = resolveTemplateTags(html, referenceDate), injected = `
    <base target="_blank">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        overflow-x: hidden !important;
        -webkit-text-size-adjust: 100%;
      }
      img, table, td, th {
        max-width: 100% !important;
      }
      img {
        height: auto !important;
      }
      .footer {
        display: none !important;
      }
    </style>
  `;
  return /<head[^>]*>/i.test(resolved) ? resolved.replace(/<head[^>]*>/i, (match) => `${match}${injected}`) : /<html[^>]*>/i.test(resolved) ? resolved.replace(
    /<html([^>]*)>/i,
    (match, attrs) => `<html${attrs}><head>${injected}</head>`
  ) : `<head>${injected}</head>${resolved}`;
}
async function loader({ request }) {
  let now = /* @__PURE__ */ new Date(), username = process.env.LISTMONK_USERNAME, token = process.env.LISTMONK_TOKEN;
  if (!username || !token)
    return issueResponse((cachedIssue == null ? void 0 : cachedIssue.data) ?? null);
  let checkNow = Date.now();
  if (cachedIssue && checkNow - cachedIssue.timestamp < CONTENT_TTL_MS)
    return issueResponse(cachedIssue.data);
  let previewHeaders = { Authorization: `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`, Accept: "text/html" }, body = await fetchCampaignPreviewHtml(
    LIVE_CAMPAIGN_ID,
    previewHeaders
  );
  if (!body)
    return issueResponse((cachedIssue == null ? void 0 : cachedIssue.data) ?? null);
  let issue = {
    id: LIVE_CAMPAIGN_ID,
    subject: "Today's Edition",
    date: now.toISOString(),
    body: prepareIssueHtml(body, now)
  };
  return cachedIssue = { data: issue, timestamp: checkNow }, issueResponse(issue);
}
function FeedEmbed({ html, title }) {
  let iframeRef = (0, import_react8.useRef)(null), [loaded, setLoaded] = (0, import_react8.useState)(!1);
  return (0, import_react8.useEffect)(() => {
    let frame = iframeRef.current;
    if (!frame)
      return;
    let updateHeight = () => {
      var _a, _b;
      let doc2 = frame.contentDocument;
      if (doc2) {
        let height = Math.max(
          ((_a = doc2.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
          ((_b = doc2.body) == null ? void 0 : _b.scrollHeight) || 0
        );
        height > 0 && (frame.style.height = `${height}px`, setLoaded(!0));
      }
    };
    updateHeight();
    let doc = frame.contentDocument;
    if (doc && (doc.addEventListener("DOMContentLoaded", updateHeight), doc.body && typeof ResizeObserver < "u")) {
      let observer = new ResizeObserver(updateHeight);
      return observer.observe(doc.body), () => observer.disconnect();
    }
  }, [html]), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: `feed-embed${loaded ? " loaded" : ""}`, children: [
    !loaded && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "feed-skeleton", style: { minHeight: "400px" } }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "iframe",
      {
        ref: iframeRef,
        srcDoc: html,
        title,
        onLoad: () => {
          var _a, _b;
          let frame = iframeRef.current;
          if (frame != null && frame.contentDocument) {
            let height = Math.max(
              ((_a = frame.contentDocument.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
              ((_b = frame.contentDocument.body) == null ? void 0 : _b.scrollHeight) || 0
            );
            height > 0 && (frame.style.height = `${height}px`);
          }
          setLoaded(!0);
        },
        loading: "eager",
        sandbox: "allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        scrolling: "no"
      }
    )
  ] });
}
function Index() {
  let { issue } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("header", { className: "feed-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react9.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "img",
        {
          src: "/img/ja.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: "#subscribe", className: "feed-subscribe", children: "Sign Up" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("main", { className: "feed-stream", children: issue ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FeedEmbed, { html: issue.body, title: issue.subject }, issue.id) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "feed-empty", children: "Check back soon for today\u2019s edition." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "feed-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "input",
              {
                className: "feed-input email-input",
                type: "email",
                name: "email",
                required: !0,
                placeholder: "Email Address *"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "feed-submit", type: "submit", children: "Sign Up" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(AltchaWrapper, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "input",
            {
              id: "6d48f",
              type: "hidden",
              name: "l",
              value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "hidden", name: "nonce" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react9.Link, { to: "/policies/terms", children: "Terms" }),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react9.Link, { to: "/policies/privacy", children: "Privacy Policy" }),
            "."
          ] })
        ]
      }
    ) })
  ] });
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index2,
  links: () => links6,
  loader: () => loader2
});
var import_react10 = require("react"), import_react11 = require("@remix-run/react"), import_node2 = require("@remix-run/node");
var import_jsx_runtime10 = require("react/jsx-runtime"), links6 = () => [
  { rel: "stylesheet", href: showscroll_default },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" }
], LIVE_CAMPAIGN_ID2 = 1, CONTENT_TTL_MS2 = 30 * 1e3, cachedIssue2 = null;
function issueResponse2(issue, isDraft = !0) {
  return (0, import_node2.json)(
    { issue, isDraft },
    {
      headers: {
        "Cache-Control": "public, max-age=30, s-maxage=60, stale-while-revalidate=86400"
      }
    }
  );
}
async function fetchWithTimeout2(url, options, timeout = 3e3) {
  let controller = new AbortController(), timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function fetchCampaignPreviewHtml2(id, headers) {
  let response = await fetchWithTimeout2(
    `https://app.thepoast.com/api/campaigns/${id}/preview`,
    { headers },
    3e3
  );
  return response && response.ok ? await response.text() : "";
}
function formatGoDate2(date, layout) {
  let pad = (value) => String(value).padStart(2, "0"), monthNamesLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], weekdayLong = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], weekdayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), weekday = date.getDay(), tokens = [
    ["Monday", weekdayLong[weekday]],
    ["January", monthNamesLong[month - 1]],
    ["2006", String(year)],
    ["Mon", weekdayShort[weekday]],
    ["Jan", monthNamesShort[month - 1]],
    ["06", pad(year % 100)],
    ["02", pad(day)],
    ["01", pad(month)],
    ["2", String(day)],
    ["1", String(month)]
  ], result = "", i = 0;
  outer:
    for (; i < layout.length; ) {
      for (let [token, value] of tokens)
        if (layout.startsWith(token, i)) {
          result += value, i += token.length;
          continue outer;
        }
      result += layout[i], i += 1;
    }
  return result;
}
function resolveTemplateTags2(html, referenceDate) {
  return html.replace(
    /\{\{\s*Date\s+"([^"]*)"\s*\}\}/gi,
    (_match, layout) => {
      try {
        return formatGoDate2(referenceDate, layout);
      } catch {
        return "";
      }
    }
  ).replace(/\{\{[\s\S]*?\}\}/g, "");
}
function prepareIssueHtml2(html = "", referenceDate) {
  if (!html)
    return "";
  let resolved = resolveTemplateTags2(html, referenceDate), injected = `
    <base target="_blank">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        overflow-x: hidden !important;
        -webkit-text-size-adjust: 100%;
      }
      img, table, td, th {
        max-width: 100% !important;
      }
      img {
        height: auto !important;
      }
      .footer {
        display: none !important;
      }
    </style>
  `;
  return /<head[^>]*>/i.test(resolved) ? resolved.replace(/<head[^>]*>/i, (match) => `${match}${injected}`) : /<html[^>]*>/i.test(resolved) ? resolved.replace(
    /<html([^>]*)>/i,
    (match, attrs) => `<html${attrs}><head>${injected}</head>`
  ) : `<head>${injected}</head>${resolved}`;
}
async function loader2({ request }) {
  let now = /* @__PURE__ */ new Date(), username = process.env.LISTMONK_USERNAME, token = process.env.LISTMONK_TOKEN;
  if (!username || !token)
    return issueResponse2((cachedIssue2 == null ? void 0 : cachedIssue2.data) ?? null, !0);
  let checkNow = Date.now();
  if (cachedIssue2 && checkNow - cachedIssue2.timestamp < CONTENT_TTL_MS2)
    return issueResponse2(cachedIssue2.data, !0);
  let previewHeaders = { Authorization: `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`, Accept: "text/html" }, body = await fetchCampaignPreviewHtml2(
    LIVE_CAMPAIGN_ID2,
    previewHeaders
  );
  if (!body)
    return issueResponse2((cachedIssue2 == null ? void 0 : cachedIssue2.data) ?? null, !0);
  let issue = {
    id: LIVE_CAMPAIGN_ID2,
    subject: "Today's Edition",
    date: now.toISOString(),
    body: prepareIssueHtml2(body, now)
  };
  return cachedIssue2 = { data: issue, timestamp: checkNow }, issueResponse2(issue, !0);
}
function FeedEmbed2({ html, title }) {
  let iframeRef = (0, import_react10.useRef)(null), [loaded, setLoaded] = (0, import_react10.useState)(!1);
  return (0, import_react10.useEffect)(() => {
    let frame = iframeRef.current;
    if (!frame)
      return;
    let updateHeight = () => {
      var _a, _b;
      let doc2 = frame.contentDocument;
      if (doc2) {
        let height = Math.max(
          ((_a = doc2.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
          ((_b = doc2.body) == null ? void 0 : _b.scrollHeight) || 0
        );
        height > 0 && (frame.style.height = `${height}px`, setLoaded(!0));
      }
    };
    updateHeight();
    let doc = frame.contentDocument;
    if (doc && (doc.addEventListener("DOMContentLoaded", updateHeight), doc.body && typeof ResizeObserver < "u")) {
      let observer = new ResizeObserver(updateHeight);
      return observer.observe(doc.body), () => observer.disconnect();
    }
  }, [html]), /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: `feed-embed${loaded ? " loaded" : ""}`, children: [
    !loaded && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "feed-skeleton", style: { minHeight: "400px" } }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "iframe",
      {
        ref: iframeRef,
        srcDoc: html,
        title,
        onLoad: () => {
          var _a, _b;
          let frame = iframeRef.current;
          if (frame != null && frame.contentDocument) {
            let height = Math.max(
              ((_a = frame.contentDocument.documentElement) == null ? void 0 : _a.scrollHeight) || 0,
              ((_b = frame.contentDocument.body) == null ? void 0 : _b.scrollHeight) || 0
            );
            height > 0 && (frame.style.height = `${height}px`);
          }
          setLoaded(!0);
        },
        loading: "eager",
        sandbox: "allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        scrolling: "no"
      }
    )
  ] });
}
function Index2() {
  let { issue, isDraft } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "feed-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("header", { className: "feed-topbar", children: [
      isDraft && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "feed-status", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "status-dot" }),
        "404 Error"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react11.Link, { className: "feed-mark", to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "img",
        {
          src: "/img/ja.png",
          alt: "The Poast",
          loading: "eager",
          decoding: "async"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "#subscribe", className: "feed-subscribe", children: "Sign Up" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("main", { className: "feed-stream", children: issue ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FeedEmbed2, { html: issue.body, title: issue.subject }, issue.id) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "feed-empty", children: "Check back soon for today\u2019s edition." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("footer", { className: "feed-footer", id: "subscribe", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "form",
      {
        method: "post",
        action: "https://app.thepoast.com/subscription/form",
        className: "feed-subscribe-form",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "feed-subscribe-heading", children: "Get The Poast for free" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "feed-input-bar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "input",
              {
                className: "feed-input email-input",
                type: "email",
                name: "email",
                required: !0,
                placeholder: "Email Address *"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { className: "feed-submit", type: "submit", children: "Subscribe" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "feed-altcha-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AltchaWrapper, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "input",
            {
              id: "6d48f",
              type: "hidden",
              name: "l",
              value: "6d48fffe-7d37-4c14-b317-3e4cda33a647"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { type: "hidden", name: "nonce" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "feed-legal", children: [
            "By submitting, you agree to our",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react11.Link, { to: "/policies/terms", children: "Terms" }),
            " &",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react11.Link, { to: "/policies/privacy", children: "Privacy Policy" }),
            "."
          ] })
        ]
      }
    ) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-BM3SINQ5.js", imports: ["/build/_shared/chunk-J4P7KS5W.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DFZGVW7D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-QMCS7TQF.js", imports: ["/build/_shared/chunk-PGOH7JLP.js", "/build/_shared/chunk-HKYDBL2I.js", "/build/_shared/chunk-OSEKOQA4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/confirm": { id: "routes/confirm", parentId: "root", path: "confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/confirm-5OZ2TYHE.js", imports: ["/build/_shared/chunk-7FFU4IA4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OVYLL4SF.js", imports: ["/build/_shared/chunk-PGOH7JLP.js", "/build/_shared/chunk-HKYDBL2I.js", "/build/_shared/chunk-OSEKOQA4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-LOBRDZAI.js", imports: ["/build/_shared/chunk-WHDW3QXT.js", "/build/_shared/chunk-7FFU4IA4.js", "/build/_shared/chunk-HKYDBL2I.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-CMVJS5GC.js", imports: ["/build/_shared/chunk-WHDW3QXT.js", "/build/_shared/chunk-7FFU4IA4.js", "/build/_shared/chunk-HKYDBL2I.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-2JDQ4L45.js", imports: ["/build/_shared/chunk-7FFU4IA4.js", "/build/_shared/chunk-OSEKOQA4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "80158d42", hmr: void 0, url: "/build/manifest-80158D42.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/policies/privacy": {
    id: "routes/policies/privacy",
    parentId: "root",
    path: "policies/privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/policies/terms": {
    id: "routes/policies/terms",
    parentId: "root",
    path: "policies/terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/subscribe": {
    id: "routes/subscribe",
    parentId: "root",
    path: "subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/confirm": {
    id: "routes/confirm",
    parentId: "root",
    path: "confirm",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
