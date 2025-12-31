var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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
var import_react2 = require("@remix-run/react");

// public/img/in.png
var in_default = "/build/_assets/in-4S25RRTW.png";

// public/img/x.png
var x_default = "/build/_assets/x-J2PMTTZT.png";

// public/img/email.png
var email_default = "/build/_assets/email-KANKX45L.png";

// app/components/footer.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Shilll" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 12,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-signup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Screw it, let's do it." }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 16,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Subscribe to stay informed \u{1F680}" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 17,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 20,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 21,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.tsx",
            lineNumber: 19,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 23,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 24,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 25,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 18,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 15,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: "Company" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 31,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Home" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 32,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { title: "get in touch", href: "mailto:chris@shilll.com", rel: "noopener noreferrer", children: "Get in touch" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 33,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 30,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: "Newsletters" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 36,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { title: "Jeffamazon", href: "https://jeffamazon.com", rel: "noopener noreferrer", children: "Jeffamazon" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { title: "The Poast", href: "https://thepoast.com", rel: "noopener noreferrer", children: "The Poast" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 35,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 29,
        columnNumber: 1
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 14,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://x.com/shillhq", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://linkedin.com/company/signore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:chris@shilll.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 10,
    columnNumber: 1
  }, this);
}

// app/root.tsx
var import_react3 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-T73NYYRC.css";

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
  description: "Elevate Your Life.",
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/policies/checkmarks.tsx
var checkmarks_exports = {};
__export(checkmarks_exports, {
  default: () => Index
});
var import_react4 = require("react");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-HE6EAVYE.png";

// public/img/bluecheck.png
var bluecheck_default = "/build/_assets/bluecheck-MKACVA5U.png";

// public/img/goldcheck.png
var goldcheck_default = "/build/_assets/goldcheck-RK5LKHI4.png";

// public/img/graycheck.png
var graycheck_default = "/build/_assets/graycheck-7SQNBKZV.png";

// public/img/blackcheck.png
var blackcheck_default = "/build/_assets/blackcheck-QIRPZK6Q.png";

// app/routes/policies/checkmarks.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Index() {
  return (0, import_react4.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-verification", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/policies/checkmarks.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/checkmarks.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content-verification2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "About checkmarks in the Jeffamazon newsletter." }, void 0, !1, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Jeffamazon applies checkmarks as visual identity signals on account profiles to provide more context about\u2014and help distinguish\u2014different types of profiles. All of these indicators are applied by Jeffamazon, not the profile holder." }, void 0, !1, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Blue checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The blue checkmark means that a account is a real person who meets our eligibility requirements. These accounts typically always represent an individual and have under gone review and confirmation that confirms they meet the authentic content and people standards we ahere to." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: bluecheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Gold checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The gold checkmark indicates that the account is an official organization, company, or business." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: goldcheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Gray checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The gray checkmark indicates that an account represents a government organization or is an official government representative." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: graycheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Black checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The black checkmark indicates that an account is anonymous, pseudonymous, or a parody." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: blackcheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/checkmarks.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/checkmarks.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Index2
});
var import_react5 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index2() {
  return (0, import_react5.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Privacy Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 25,
          columnNumber: 41
        }, this),
        "Effective: September 1, 2025."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Jeffamazon respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "websites, the Jeffamazon Store, paid products" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "information we collect" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "We encourage you to read this Policy carefully. If you have questions, please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 41,
          columnNumber: 104
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "1. About This Policy And Us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a)Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Jeffamazon, Inc. (\u201CJeffamazon,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b) When this Policy applies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 52,
            columnNumber: 175
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) Location-specific sections" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 56,
          columnNumber: 277
        }, this),
        "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 64,
          columnNumber: 152
        }, this),
        " if you have questions about your rights under other data privacy laws."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a) Information you provide" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "For instance, make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b) Information collected when you use the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with Jeffamazon Store products." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "MANAGING COOKIES AND SIMILAR TECHNOLOGIES: WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) Information we generate" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(2) How We Use Your Information" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(a)To provide our content, services and products to you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(b)To manage your subscriptions or fulfill product orders" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(c) To improve our services and develop new ones" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(d)To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(f)To create broader findings with aggregate and deidentified data" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(g) To ensure legal compliance" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(h) Purposes" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this),
          ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 144,
            columnNumber: 670
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/privacy.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/ads/ad-formats.tsx
var ad_formats_exports = {};
__export(ad_formats_exports, {
  default: () => Index3
});
var import_react6 = require("react");

// public/img/newads.jpg
var newads_default = "/build/_assets/newads-A2NPDGWT.jpg";

// public/img/convertads.jpg
var convertads_default = "/build/_assets/convertads-A3VA6G33.jpg";

// public/img/ads/carouselads.gif
var carouselads_default = "/build/_assets/carouselads-YR2S7JED.gif";

// public/img/ads/videoads.gif
var videoads_default = "/build/_assets/videoads-F2UUHDYG.gif";

// public/img/ads/imageads.png
var imageads_default = "/build/_assets/imageads-RD4SWZBS.png";

// public/img/ads/textads.png
var textads_default = "/build/_assets/textads-72PH3JXN.png";

// public/img/ads/quickads.png
var quickads_default = "/build/_assets/quickads-BN5Z5EKR.png";

// public/img/ads/recads.png
var recads_default = "/build/_assets/recads-SE6OOE5Y.png";

// public/img/ads/takeoverads.png
var takeoverads_default = "/build/_assets/takeoverads-HD2GNEC2.png";

// app/routes/ads/ad-formats.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Index3() {
  return (0, import_react6.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-adformats", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-awu3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "GET STARTED" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Jeffamazon Ads" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: convertads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Promote your posts" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Jeffamazon Ads can support a variety of posts you've already made on LinkedIn, Instagram, Facebook, or X. Instantly get more engagement on your favorite posts." }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: newads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Promote your campaigns" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Give your existing ad campaigns on LinkedIn, Instagram, Facebook, or X a new place to perform\u2014the email inbox." }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 36,
      columnNumber: 2
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-awu3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Image and Text Ads" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: imageads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Image Ads" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Image ads allow you to showcase your product or service with plain jane text and a single photo." }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: textads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Text Ads" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Text Ads are the most simple and frictionless way to get your brands message across our audience." }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 55,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-awu3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "MOST ENGAGING" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Carousel and Video Ads" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: carouselads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Carousel Ads" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Carousel Ads automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions." }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: videoads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Video Ads" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Video Ads are short clips that make your products feel alive and invested to learn more through your website, app, or brand message." }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 84,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 73,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-awu3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "NEWEST" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Quick Ads" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 92,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: quickads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Quick Ads" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: `Quick Ads appear in the "Today's News" section, and gives you the chance to promote your product or service.` }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 100,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 97,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: recads_default }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Quick Content Ads" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: 'Quick Content Ads appear in the "Recs" section, making it easy for you to recommend a podcast or video.' }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 91,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-awu4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "MOST ACTION" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Takeover Ads" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: takeoverads_default }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Takeover Ads" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Give your favorite ads a big experience that takes over our timeline with a widescreen image and a CTA button to maximize engagement to your website or app." }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "mailto:chris@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 123,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 122,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ads/ad-formats.tsx",
    lineNumber: 32,
    columnNumber: 3
  }, this);
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Index4
});
var import_react7 = require("react");

// public/img/bg.jpg
var bg_default = "/build/_assets/bg-KNEKVA3I.jpg";

// public/img/bg1.jpg
var bg1_default = "/build/_assets/bg1-4DYQZ6RJ.jpg";

// app/routes/policies/terms.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index4() {
  return (0, import_react7.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content-aboutus", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content-aboutus2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Staying informed is hard." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 27,
          columnNumber: 51
        }, this),
        "We make it easy."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Jeffamazon is a daily newsletter for go-getters who like to stay informed about the business world." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content-aboutus3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: "Start your journey with Jeffamazon." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: bg_default, alt: "Sign up free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Sign up for free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Sign up for free to get the business world delivered straight to your inbox every day of the week." }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 43,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 47,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 48,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 49,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 42,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: bg1_default }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Advertise with us" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
            "Jeffamazon helps you diversify your brand by placing your content where people do business \u2014 the email inbox. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 55,
              columnNumber: 122
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 55,
              columnNumber: 128
            }, this),
            "Get started today by promoting just one of your existing LinkedIn, Instagram, Facebook, or X posts."
          ] }, void 0, !0, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "mailto:chris@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/terms.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/ads/advertise.tsx
var advertise_exports = {};
__export(advertise_exports, {
  default: () => Index5
});
var import_react8 = require("react");

// public/img/promoted-ads.png
var promoted_ads_default = "/build/_assets/promoted-ads-RD4SWZBS.png";

// public/img/text-ads.png
var text_ads_default = "/build/_assets/text-ads-UVDZPA4E.png";

// app/routes/ads/advertise.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), ads = [
  {
    image: promoted_ads_default,
    title: "Images Ads",
    description: "Showcase your product or service with a single image, six-images, or a short video."
  },
  {
    image: carouselads_default,
    title: "Carousel Ads",
    description: "Rotate up to six images to showcase multiple products or promotions."
  },
  {
    image: videoads_default,
    title: "Video Ads",
    description: "Make products feel alive and drive engagement to your website, app, or brand message."
  },
  {
    image: text_ads_default,
    title: "Text Ads",
    description: "Use plain jane words to say something that gets your brands message across our audience."
  }
];
function Index5() {
  let [adIndex, setAdIndex] = (0, import_react8.useState)(0), next = () => setAdIndex((prev2) => (prev2 + 1) % ads.length), prev = () => setAdIndex((prev2) => (prev2 - 1 + ads.length) % ads.length);
  return (0, import_react8.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content-awu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 59,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content-awu2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Reach 10K+ professional people aiming to stay ahead." }, void 0, !1, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "MOST POPULAR" }, void 0, !1, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "Jeffamazon ad formats" }, void 0, !1, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ads-carousel-txt", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "adsbox", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Jeffamazon Ads can support a variety of media formats through the following sub-categories:" }, void 0, !1, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("b", { children: "Image Ads " }, void 0, !1, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 74,
              columnNumber: 9
            }, this),
            "allow you to showcase your product or service with a single photo."
          ] }, void 0, !0, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 73,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("b", { children: "Carousel Ads " }, void 0, !1, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 78,
              columnNumber: 9
            }, this),
            "automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions."
          ] }, void 0, !0, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 77,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("b", { children: "Video Ads " }, void 0, !1, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 82,
              columnNumber: 9
            }, this),
            "make products feel alive while driving people to your website, app, or brand message."
          ] }, void 0, !0, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 81,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("b", { children: "Text Ads " }, void 0, !1, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 86,
              columnNumber: 9
            }, this),
            "are the most simple and frictionless way to say something and get a message directly to our audience."
          ] }, void 0, !0, {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 85,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 72,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "mailto:chris@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 91,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 90,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 70,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ads-carousel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "carousel-button prev", onClick: prev, children: "\u25C0" }, void 0, !1, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 98,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "carousel-button next", onClick: next, children: "\u25B6" }, void 0, !1, {
          fileName: "app/routes/ads/advertise.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "div",
          {
            className: "carousel-track",
            style: { transform: `translateX(-${adIndex * 100}%)` },
            children: ads.map((ad, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "carousel-slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: ad.image, alt: ad.title }, void 0, !1, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 107,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: ad.title }, void 0, !1, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 108,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: ad.description }, void 0, !1, {
                fileName: "app/routes/ads/advertise.tsx",
                lineNumber: 109,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this) }, i, !1, {
              fileName: "app/routes/ads/advertise.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/ads/advertise.tsx",
            lineNumber: 100,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 97,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 69,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content-awu6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%." }, void 0, !1, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Source: Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone." }, void 0, !1, {
        fileName: "app/routes/ads/advertise.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 118,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 117,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "mailto:chris@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 126,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise.tsx",
      lineNumber: 125,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ads/advertise.tsx",
    lineNumber: 58,
    columnNumber: 3
  }, this);
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => Index6
});
var import_react9 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Index6() {
  return (0, import_react9.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { children: "JEFFAMAZON DAILY NEWSLETTER" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Stay ahead of the curve" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Subscribe for your daily dose of business news that feels good \u{1F680}" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index7
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content-aboutus", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content-aboutus2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: "This is how I started Jeffamazon." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "...." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index8
});
var import_react10 = require("react");

// public/img/ja3.png
var ja3_default = "/build/_assets/ja3-I6YJNRN4.png";

// app/routes/index.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Index8() {
  return (0, import_react10.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: ja1_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { children: "Elevate Your Life" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Scroll Less. Live More." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Shilll is a place for people who actually want to live more. Subscribe to stay informed \u{1F680}" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: ja3_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: [
        "Live more with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 48,
          columnNumber: 26
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { title: "subscription form", href: "https://jeffamazon.com/subscribe", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Shilll's mission is to help humanity live more. Our 1-minute newsletters are meticulously designed to elevate your life with timely information." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { children: "Get started" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { children: "Build your own empire" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Build" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Want to start & build a newsletter with us?" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { title: "get in touch", href: "mailto:chris@shilll.com", rel: "noopener noreferrer", children: "Get in touch \u2192" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Grow" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Raising funding? We're occasional investors." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { title: "get in touch", href: "mailto:chris@shilll.com", rel: "noopener noreferrer", children: "Get in touch \u2192" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 64,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 53,
      columnNumber: 8
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MHBDWL7T.js", imports: ["/build/_shared/chunk-MRRK4OAK.js", "/build/_shared/chunk-SBNNL67F.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SITKWAQS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-I2AFXXCS.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ads/ad-formats": { id: "routes/ads/ad-formats", parentId: "root", path: "ads/ad-formats", index: void 0, caseSensitive: void 0, module: "/build/routes/ads/ad-formats-LBYHZR23.js", imports: ["/build/_shared/chunk-O4J3EUIC.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ads/advertise": { id: "routes/ads/advertise", parentId: "root", path: "ads/advertise", index: void 0, caseSensitive: void 0, module: "/build/routes/ads/advertise-MHHOFAVG.js", imports: ["/build/_shared/chunk-O4J3EUIC.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IX5UOTY5.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/checkmarks": { id: "routes/policies/checkmarks", parentId: "root", path: "policies/checkmarks", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/checkmarks-REDDTHE4.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-QR5EZBBP.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-IN6MH4ZQ.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-DFDJYGYC.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "4cbfa695", hmr: void 0, url: "/build/manifest-4CBFA695.js" };

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
  "routes/policies/checkmarks": {
    id: "routes/policies/checkmarks",
    parentId: "root",
    path: "policies/checkmarks",
    index: void 0,
    caseSensitive: void 0,
    module: checkmarks_exports
  },
  "routes/policies/privacy": {
    id: "routes/policies/privacy",
    parentId: "root",
    path: "policies/privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/ads/ad-formats": {
    id: "routes/ads/ad-formats",
    parentId: "root",
    path: "ads/ad-formats",
    index: void 0,
    caseSensitive: void 0,
    module: ad_formats_exports
  },
  "routes/policies/terms": {
    id: "routes/policies/terms",
    parentId: "root",
    path: "policies/terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/ads/advertise": {
    id: "routes/ads/advertise",
    parentId: "root",
    path: "ads/advertise",
    index: void 0,
    caseSensitive: void 0,
    module: advertise_exports
  },
  "routes/subscribe": {
    id: "routes/subscribe",
    parentId: "root",
    path: "subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
