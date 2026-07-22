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
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
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

// app/components/footer.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 6,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/policies/terms", children: "Terms and Conditions" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:support@thepoast.com", children: "Contact" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this);
}

// app/root.tsx
var import_react3 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-CVMBXXCX.css";

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
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
  title: "Shilll",
  description: "Making sand think and do.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Index,
  links: () => links2
});

// public/img/ja.png
var ja_default = "/build/_assets/ja-HE6EAVYE.png";

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-FNF7IES6.css";

// app/routes/policies/privacy.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Privacy Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 16,
          columnNumber: 41
        }, this),
        "Effective: April 5, 2025."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Shilll respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect, use, and protect your information when you use our software platform and related services (the \u201CServices\u201D). This Policy explains what information we collect, why we collect it, and your rights regarding your information." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 17,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The Services covered by this Policy include:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "the Shilll website and software applications;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 22,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "user accounts and related platform features;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 23,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "customer support and communications; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 24,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "any other services that link to this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 25,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 31,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "information we collect;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 32,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "how we use information;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 33,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "when we disclose information to third parties; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 34,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "your rights and choices." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 35,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        "We encourage you to read this Policy carefully. If you have questions, please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@shilll.com", children: "privacyrequest@shilll.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 38,
          columnNumber: 104
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "1. About This Policy And Us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(a) Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Shilll, Inc. (\u201CShilll,\u201D \u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy have the meanings provided in our Terms." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(b) When this Policy applies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This Policy applies when you access or use the Services. By using the Services, you acknowledge that you have read and understand this Policy." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We may update this Policy from time to time as our Services evolve. If we make material changes, we will update the Last Updated date and provide notice where required by applicable law." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(c) Third-party services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The Services may contain links to third-party websites, products, or services. This Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you use." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "2. Information We Collect" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(a) Information you provide" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "When you create an account, use the Services, or contact us, we may collect information you provide, including:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "name;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 63,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "email address;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 64,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "account login information;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 65,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "company or organization information you choose to provide;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 66,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "communications you send to us; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 67,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "any other information you voluntarily provide." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 68,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We do not collect sensitive personal information unless required for a specific purpose and permitted by applicable law." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(b) Information collected automatically" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "When you use the Services, we may automatically collect technical information about your device and usage of the platform, including:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "IP address;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 78,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "browser type and operating system;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 79,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "device information;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 80,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "pages and features accessed within the Services;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 81,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "usage activity and performance information; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 82,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "logs used for security, debugging, and improving the Services." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 83,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(c) Cookies and similar technologies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We use cookies and similar technologies to operate, secure, and improve the Services. These technologies may help us remember your preferences, understand usage patterns, and improve platform performance." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You may control cookies through your browser settings. Some features of the Services may not function properly if cookies are disabled." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "3. How We Use Your Information" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We use information we collect for the following purposes:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(a) To provide and operate the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Create and manage user accounts;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 99,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Provide access to platform features;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 100,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Authenticate users and maintain account security;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 101,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Provide customer support; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 102,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Send transactional communications related to your account." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 103,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(b) To communicate with you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Send account verification emails;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 109,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Send password resets and security notifications;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 110,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Notify you about changes to your account or the Services; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 111,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Respond to questions or requests." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 112,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(c) To improve and protect the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Monitor performance and reliability;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 118,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Detect and prevent fraud, abuse, and security issues;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 119,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Analyze usage trends; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 120,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Develop and improve features." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 121,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(d) To comply with legal obligations" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Comply with applicable laws and regulations;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 127,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Respond to lawful requests from authorities; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 128,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Protect our rights and the security of our users." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 129,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "4. Transactional Communications" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Shilll may send transactional emails necessary to operate the Services, including account verification, password resets, account notifications, security alerts, and other service-related communications." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "These emails are only sent to users who create accounts or otherwise interact with the Services. We do not buy, rent, or scrape email lists, and we do not send unsolicited commercial email." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "5. Your Rights And Choices" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Depending on where you live, you may have rights regarding your personal information, including the right to:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "access the personal information we hold about you;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 143,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "request correction of inaccurate information;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 144,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "request deletion of your information where applicable;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 145,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "object to certain processing activities; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 146,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "withdraw consent where processing is based on consent." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 147,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        "To exercise your rights or ask questions about this Policy, contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "mailto:privacyrequest@shilll.com", children: "privacyrequest@shilll.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 150,
          columnNumber: 86
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      "      "
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/privacy.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Index2,
  links: () => links3
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Terms and Conditions." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 15,
          columnNumber: 47
        }, this),
        "Effective: July 22, 2026."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "These Terms and Conditions (\u201CTerms\u201D) govern your access to and use of the Shilll platform and related services (the \u201CServices\u201D). By accessing or using the Services, you agree to be bound by these Terms." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "If you do not agree to these Terms, you may not access or use the Services." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "1. About Shilll" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a) Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Shilll, Inc. (\u201CShilll,\u201D \u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D) provides software products and services through the Services. These Terms establish the rules and conditions for using our platform." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b) Changes to these Terms" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We may update these Terms from time to time as our Services evolve. If we make material changes, we will update the Effective date above and provide notice where required." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Your continued use of the Services after changes become effective means you accept the updated Terms." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "2. Accounts" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may need to create an account to access certain features of the Services." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "You must provide accurate and complete information when creating an account." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 38,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "You are responsible for maintaining the security of your account credentials." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 39,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "You are responsible for all activity that occurs under your account." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 40,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "You must notify us if you believe your account has been compromised." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 41,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You must be legally capable of entering into these Terms to use the Services." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "3. Using The Services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may use the Services only for lawful purposes and in accordance with these Terms." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You agree not to:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "use the Services to violate applicable laws or regulations;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 53,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "attempt to gain unauthorized access to the Services or related systems;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 54,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "interfere with the security, reliability, or performance of the Services;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 55,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "reverse engineer, copy, or attempt to extract source code from the Services except where permitted by law;" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 56,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "use the Services to transmit malicious code, spam, or abusive content." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 57,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We reserve the right to investigate suspected violations and take appropriate action." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "4. Payments And Subscriptions" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "If you purchase paid features or subscriptions, you agree to provide accurate billing information and authorize us or our payment providers to process applicable charges." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Fees are displayed before purchase." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 67,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Payments are non-refundable except where required by law or stated otherwise." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 68,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Subscriptions may automatically renew unless cancelled before the renewal date." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 69,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We may change pricing or introduce new paid features by providing reasonable notice." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "5. Intellectual Property" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Services, including software, design, branding, content, and related materials, are owned by Shilll or its licensors and are protected by applicable intellectual property laws." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We grant you a limited, non-exclusive, non-transferable right to access and use the Services for their intended purpose." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may not copy, modify, distribute, sell, or exploit any part of the Services without our prior written permission." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "6. User Content" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "If you submit, upload, or provide content through the Services (\u201CUser Content\u201D), you retain ownership of your User Content." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You grant Shilll a limited license to use User Content only as necessary to provide, maintain, and improve the Services." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You are responsible for ensuring that your User Content does not violate applicable laws or the rights of others." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "7. Communications" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We may send you service-related communications, including account verification emails, security notifications, product updates, and other messages necessary to operate the Services." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may manage optional communications through available settings or by contacting us." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "8. Third-Party Services" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Services may integrate with third-party services. Your use of third-party services is governed by their own terms and policies." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Shilll is not responsible for third-party services or their availability." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "9. Termination" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may stop using the Services at any time." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We may suspend or terminate access to the Services if you violate these Terms, create risk for other users, or misuse the Services." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Upon termination, your right to use the Services will immediately end." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "10. Disclaimers" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Services are provided on an \u201Cas available\u201D basis. To the maximum extent permitted by law, Shilll does not guarantee that the Services will always be uninterrupted, secure, or error-free." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We disclaim all warranties not expressly stated in these Terms." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "11. Limitation Of Liability" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "To the maximum extent permitted by law, Shilll will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the Services." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Our total liability for any claim relating to the Services will not exceed the amount you paid to Shilll during the twelve months before the event giving rise to the claim." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "12. Privacy" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Your use of the Services is also governed by our Privacy Policy, which explains how we collect and use information." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "13. Contact" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "If you have questions about these Terms, contact us at:" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:support@shilll.com", children: "support@shilll.com" }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 130,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/terms.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/access.tsx
var access_exports = {};
__export(access_exports, {
  default: () => Index3
});
var import_react5 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react4 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "altcha-widget",
    {
      challengeurl: "https://app.jeffamzn.com/api/public/captcha/altcha",
      hidefooter: "true",
      hidelogo: "true"
    },
    void 0,
    !1,
    {
      fileName: "app/components/altcha.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// public/img/social/info.png
var info_default = "/build/_assets/info-FQKLT5OI.png";

// public/img/ja7.png
var ja7_default = "/build/_assets/ja7-DQ7XLZVS.png";

// app/routes/access.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "subscribe-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/access.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/routes/access.tsx",
      lineNumber: 19,
      columnNumber: 14
    }, this) }, void 0, !1, {
      fileName: "app/routes/access.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/access.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Business Email Address *" }, void 0, !1, {
          fileName: "app/routes/access.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "submit", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/access.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/access.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { id: "36b8c", type: "hidden", name: "l", checked: !0, value: "36b8c160-7d12-4103-aaba-8e3cd90d9d64" }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/access.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      "By creating an account, you agree to our ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
        fileName: "app/routes/access.tsx",
        lineNumber: 34,
        columnNumber: 57
      }, this),
      " and to receive account-related emails including verification, security alerts, and service notifications."
    ] }, void 0, !0, {
      fileName: "app/routes/access.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Shilll" }, void 0, !1, {
      fileName: "app/routes/access.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/access.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/access.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index4
});
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-header2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Shilll makes it easy to connect your AI to Salesforce" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { to: "/access", children: "Get Access" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index5
});
var import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-header2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Shilll makes it easy to connect your AI to Salesforce" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { to: "/access", children: "Get Access" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "err", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "404 | This page could not be found." }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 18,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7VPN2UI5.js", imports: ["/build/_shared/chunk-4RXSKUQF.js", "/build/_shared/chunk-S4ZNHW4H.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-N6NBRYJC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-MT6XX2AI.js", imports: ["/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/access": { id: "routes/access", parentId: "root", path: "access", index: void 0, caseSensitive: void 0, module: "/build/routes/access-PHPONFRB.js", imports: ["/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-FDK7CPMF.js", imports: ["/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-JLT3SNKO.js", imports: ["/build/_shared/chunk-MG3UHPBD.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-5D2DVSZE.js", imports: ["/build/_shared/chunk-MG3UHPBD.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "85bfe9bb", hmr: void 0, url: "/build/manifest-85BFE9BB.js" };

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
  "routes/access": {
    id: "routes/access",
    parentId: "root",
    path: "access",
    index: void 0,
    caseSensitive: void 0,
    module: access_exports
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
//# sourceMappingURL=server.js.map
