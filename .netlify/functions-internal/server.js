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
var import_react3 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react2 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react2.useState)(!1);
  return (0, import_react2.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// public/img/in.png
var in_default = "/build/_assets/in-4S25RRTW.png";

// public/img/email.png
var email_default = "/build/_assets/email-KANKX45L.png";

// app/components/footer.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Shilll" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 11,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-signup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Screw it, let's do it." }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 15,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Build your career with Shilll \u{1F680}" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 19,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 20,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.tsx",
            lineNumber: 18,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 23,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 24,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 17,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Shilll" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 30,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "Home" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 31,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/about", children: "About" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 32,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 29,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Profile" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 35,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/profile/personal", children: "Personal" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 36,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/profile/enterprise", children: "Enterprise" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 37,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 34,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 28,
        columnNumber: 1
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 13,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 45,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 46,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 44,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://linkedin.com/company/signore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 52,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 51,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:chris@shilll.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 55,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 54,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 50,
        columnNumber: 3
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 42,
      columnNumber: 1
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 9,
    columnNumber: 1
  }, this);
}

// app/root.tsx
var import_react4 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-Y6S64WBP.css";

// app/root.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [
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
  title: "Shilll : World-Class Compensation, Immediate Vesting & No Cliffs",
  description: "Own the upside in your work with Shilll.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/profile/enterprise.tsx
var enterprise_exports = {};
__export(enterprise_exports, {
  default: () => Index
});
var import_react5 = require("@remix-run/react");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-HE6EAVYE.png";

// app/routes/profile/enterprise.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "adform-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ja1_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/profile/enterprise.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile/enterprise.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "ENTERPRISE" }, void 0, !1, {
          fileName: "app/routes/profile/enterprise.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Start an enterprise profile \u2728" }, void 0, !1, {
          fileName: "app/routes/profile/enterprise.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "firstName", required: !0, placeholder: "First Name *" }, void 0, !1, {
            fileName: "app/routes/profile/enterprise.tsx",
            lineNumber: 20,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "lastName", required: !0, placeholder: "Last Name *" }, void 0, !1, {
            fileName: "app/routes/profile/enterprise.tsx",
            lineNumber: 21,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "company", required: !0, placeholder: "Company *" }, void 0, !1, {
            fileName: "app/routes/profile/enterprise.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "role", required: !0, placeholder: "Job Title *" }, void 0, !1, {
            fileName: "app/routes/profile/enterprise.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
            fileName: "app/routes/profile/enterprise.tsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "submit", type: "submit", children: "Create profile" }, void 0, !1, {
            fileName: "app/routes/profile/enterprise.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile/enterprise.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
          fileName: "app/routes/profile/enterprise.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
          fileName: "app/routes/profile/enterprise.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/profile/enterprise.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile/enterprise.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile/enterprise.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: [
        "Hire the world's best builders with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/profile/enterprise.tsx",
          lineNumber: 34,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "text", to: "/profile/enterprise", children: "Shilll's mission is to give every builder a taste of entrepreneurship." }, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "text", to: "/profile/enterprise", children: "Right now you want to hire people who can make things, and you're not afraid to pay world-class compensation to make it happen." }, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "text", to: "/profile/enterprise", children: "But compensation is complex. Everyone wants wildly different things. And often it depends what your latest interest and priorities are." }, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "text", to: "/profile/enterprise", children: "At Shilll we help you hire world-class individual contributiors, individual engineers, solo entrepreneurs, and small teams who make things." }, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "text", to: "/profile/enterprise", children: "Shilll is a perfect fit for enterprises who arn't afraid to pay world-class compensation to the best builders in the world." }, void 0, !1, {
        fileName: "app/routes/profile/enterprise.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile/enterprise.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile/enterprise.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Index2
});
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: ja1_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Privacy Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 9,
          columnNumber: 41
        }, this),
        "Effective: September 1, 2025."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Shilll respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "websites, the Shilll Store, paid products" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "information we collect" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
        "We encourage you to read this Policy carefully. If you have questions, please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "mailto:privacyrequest@shilll.com", children: "privacyrequest@shilll.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 25,
          columnNumber: 104
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "1. About This Policy And Us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(a)Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Shilll, Inc. (\u201CShilll,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(b) When this Policy applies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
          "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "mailto:privacyrequest@shilll.com", children: "privacyrequest@shilll.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 36,
            columnNumber: 175
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(c) Location-specific sections" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
        "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 40,
          columnNumber: 277
        }, this),
        "; or (2) \u201CCCPA\u201D: the California Consumer Privacy Act, as amended."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
        "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "mailto:privacyrequest@shilll.com", children: "privacyrequest@shilll.com" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 48,
          columnNumber: 152
        }, this),
        " if you have questions about your rights under other data privacy laws."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(a) Information you provide" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "For instance, make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(b) Information collected when you use the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with Shilll Store products." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { children: "MANAGING COOKIES AND SIMILAR TECHNOLOGIES: WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(c) Information we generate" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(2) How We Use Your Information" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(a)To provide our content, services and products to you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(b)To manage your subscriptions or fulfill product orders" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(c) To improve our services and develop new ones" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(d)To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(f)To create broader findings with aggregate and deidentified data" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(g) To ensure legal compliance" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "(h) Purposes" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          ": At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          ": Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users\u2019 behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          ": We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "mailto:privacyrequest@shilll.com", children: "privacyrequest@shilll.com" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 128,
            columnNumber: 670
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/privacy.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/profile/personal.tsx
var personal_exports = {};
__export(personal_exports, {
  default: () => Index3
});
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "adform-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: ja1_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/profile/personal.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile/personal.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { children: "PERSONAL" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Start your profile \u2728" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "text", name: "firstName", required: !0, placeholder: "First Name *" }, void 0, !1, {
            fileName: "app/routes/profile/personal.tsx",
            lineNumber: 20,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "text", name: "lastName", required: !0, placeholder: "Last Name *" }, void 0, !1, {
            fileName: "app/routes/profile/personal.tsx",
            lineNumber: 21,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "text", name: "company", required: !0, placeholder: "Company *" }, void 0, !1, {
            fileName: "app/routes/profile/personal.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "text", name: "role", required: !0, placeholder: "Job Title *" }, void 0, !1, {
            fileName: "app/routes/profile/personal.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
            fileName: "app/routes/profile/personal.tsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "submit", type: "submit", children: "Create profile" }, void 0, !1, {
            fileName: "app/routes/profile/personal.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile/personal.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/profile/personal.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: [
        "Own your upside with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 34,
          columnNumber: 32
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: "Shilll's mission is to give every person a taste of entrepreneurship." }, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: "Right now the market is starved for people who can actually build things. Companies now realize one 10X engineer is worth more than a dozen managers - and they're paying world-class compensation to prove it." }, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: "But compensation is complex. Everyone wants wildly different things. And your goals can change fast." }, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: "At Shilll we help you control your own upside. We give you a single number of total compensation that you can divie up between cash, RSUs, and stock options." }, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Saving for a down payment?" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 43,
          columnNumber: 55
        }, this),
        " Go all cash."
      ] }, void 0, !0, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Willing to bet on yourself?" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 45,
          columnNumber: 55
        }, this),
        " Up the equity."
      ] }, void 0, !0, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Want more options?" }, void 0, !1, {
          fileName: "app/routes/profile/personal.tsx",
          lineNumber: 47,
          columnNumber: 55
        }, this),
        " You know what to do."
      ] }, void 0, !0, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { className: "text", to: "/profile/personal", children: "We're the pefect fit for individual contributors and engineers, solo entrepreneurs, and lean teams who know the best years of their career shouldn't be wasted managing work instead of owning it." }, void 0, !1, {
        fileName: "app/routes/profile/personal.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile/personal.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile/personal.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Index4
});

// public/img/bg.jpg
var bg_default = "/build/_assets/bg-KNEKVA3I.jpg";

// public/img/bg1.jpg
var bg1_default = "/build/_assets/bg1-4DYQZ6RJ.jpg";

// app/routes/policies/terms.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content-aboutus", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content-aboutus2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Staying informed is hard." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 11,
          columnNumber: 51
        }, this),
        "We make it easy."
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Jeffamazon is a daily newsletter for go-getters who like to stay informed about the business world." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content-aboutus3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "Start your journey with Jeffamazon." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: bg_default, alt: "Sign up free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Sign up for free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Sign up for free to get the business world delivered straight to your inbox every day of the week." }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 23,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 28,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 29,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 27,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 31,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 32,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 33,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 26,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: bg1_default }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Advertise with us" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
            "Jeffamazon helps you diversify your brand by placing your content where people do business \u2014 the email inbox. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 39,
              columnNumber: 122
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 39,
              columnNumber: 128
            }, this),
            "Get started today by promoting just one of your existing LinkedIn, Instagram, Facebook, or X posts."
          ] }, void 0, !0, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "mailto:chris@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/terms.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/index-alt.tsx
var index_alt_exports = {};
__export(index_alt_exports, {
  default: () => Index5
});
var import_react7 = require("@remix-run/react");

// public/img/cs.jpg
var cs_default = "/build/_assets/cs-3THKTAXS.jpg";

// app/routes/index-alt.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: ja1_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "The one person company." }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Hey, I'm Chris." }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "pricebtn", to: "/profile/personal", children: "Get in touch" }, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: [
        "Hey I'm ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Chris Signore" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 25,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "text", to: "/profile/personal", children: [
        "I'm best known for my newsletter ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Jeffamazon" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 26,
          columnNumber: 88
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "text", to: "/profile/personal", children: "But I'm actually just a one man band who likes to build things." }, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "text", to: "/profile/personal", children: [
        "If you want to get in touch with me the best way to reach me is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "chris@shilll.com" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 30,
          columnNumber: 119
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-content255", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "side1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "LEADERSHIP" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 35,
          columnNumber: 12
        }, this) }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 35,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "noclick", children: "Founder" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "noclick", children: "Chris Signore" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "pricebtn", to: "/about", children: "About" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "side2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: cs_default, alt: "Founder image" }, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-content2555", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "text", to: "/about", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "gray", children: '"' }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 47,
          columnNumber: 46
        }, this),
        " I just want to make something exist in the world."
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "CHRIS SIGNORE" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Founder" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-content3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Contact" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Get in touch by email." }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "text", to: "/profile/personal", children: "Get in touch \u2192" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Sign up" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Sign up to Jeffamazon." }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "text", to: "/profile/enterprise", children: "Sign up \u2192" }, void 0, !1, {
          fileName: "app/routes/index-alt.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-alt.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/index-alt.tsx",
      lineNumber: 57,
      columnNumber: 8
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index-alt.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index6
});
var import_react8 = require("@remix-run/react");

// public/img/ja6.png
var ja6_default = "/build/_assets/ja6-ZCHNZA2M.png";

// app/routes/about.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index6() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "about-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: ja1_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h4", { children: "Hey, I'm Chris" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: [
            "Aspiring writer.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 19,
              columnNumber: 33
            }, this),
            "Aspiring entrepreneur.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 19,
              columnNumber: 61
            }, this),
            "Aspiring morning person."
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "But I'm best known for my newsletters Jeffamazon \u{1F680}" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { className: "pricebtn", href: "https://jeffamazon.com/subscribe", children: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: cs_default, alt: "Shilll image" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: "Is it time to spill the beans?" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Link, { className: "text", to: "/about", children: "I'm best known for my newsletter Jeffamazon." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Link, { className: "text", to: "/about", children: "But I'm actually just a solo entrepreneur who's bootstrapping small things that open the spectrum of entrepreneurship to everyone." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 35,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Link, { className: "text", to: "/about", children: [
        "Wanna get in touch? the best way to reach me is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "chris@shilll.com" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 36,
          columnNumber: 94
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content3sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "boxmat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: ja6_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 41,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Jeffamazon" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Daily business news" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { className: "pricebtn", href: "https://jeffamazon.com/subscribe", children: "Subscribe for free" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Link, { className: "text", to: "/about", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: '"' }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 55,
          columnNumber: 46
        }, this),
        " Shilll gives you a taste of entrepreneurship without having to risk it all."
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "CHRIS SIGNORE" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Founder" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index7
});
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Index7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: ja1_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Don't waste the best years of your career" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
          "Build a mix of world-class compensation.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 17,
            columnNumber: 56
          }, this),
          "Get immediate vesting with zero cliffs.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 17,
            columnNumber: 101
          }, this),
          " And own the upside in your work."
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "pricebtn", to: "/profile/personal", children: "Create profile" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: [
        "Own your upside with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 25,
          columnNumber: 32
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: "Shilll's mission is to give every person a taste of entrepreneurship." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: "Right now the market is starved for people who can actually build things. Companies now realize one 10X engineer is worth more than a dozen managers - and they're paying world-class compensation to prove it." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: "But compensation is complex. Everyone wants wildly different things. And your goals can change fast." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: "At Shilll we help you control your own upside. We give you a single number of total compensation that you can divie up between cash, RSUs, and stock options." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Saving for a down payment?" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 34,
          columnNumber: 55
        }, this),
        " Go all cash."
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Willing to bet on yourself?" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 36,
          columnNumber: 55
        }, this),
        " Up the equity."
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Want more options?" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 38,
          columnNumber: 55
        }, this),
        " You know what to do."
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: "We're the pefect fit for individual contributors and engineers, solo entrepreneurs, and lean teams who know the best years of their career shouldn't be wasted managing work instead of owning it." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content255", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "side1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "LEADERSHIP" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 45,
          columnNumber: 12
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 45,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "noclick", children: "Founder" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "noclick", children: "Chris Signore" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "pricebtn", to: "/about", children: "About" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "side2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: cs_default, alt: "Founder image" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content2555", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/about", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "gray", children: '"' }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 57,
          columnNumber: 46
        }, this),
        " Shilll gives you a taste of entrepreneurship without having to risk it all."
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "CHRIS SIGNORE" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Founder" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 62,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Personal" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Set your preferred comp" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/personal", children: "Personal \u2192" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Enterprise" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Get access to top talent" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react9.Link, { className: "text", to: "/profile/enterprise", children: "Enterprise \u2192" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 67,
      columnNumber: 8
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7VPN2UI5.js", imports: ["/build/_shared/chunk-4RXSKUQF.js", "/build/_shared/chunk-S4ZNHW4H.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-K7I76IWX.js", imports: ["/build/_shared/chunk-552RS725.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-BV3LLZYC.js", imports: ["/build/_shared/chunk-EJTSO6MN.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6C77ASK4.js", imports: ["/build/_shared/chunk-EJTSO6MN.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index-alt": { id: "routes/index-alt", parentId: "root", path: "index-alt", index: void 0, caseSensitive: void 0, module: "/build/routes/index-alt-EY3BD2ZJ.js", imports: ["/build/_shared/chunk-EJTSO6MN.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-P2ANN5G6.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-YUU3Q6ML.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile/enterprise": { id: "routes/profile/enterprise", parentId: "root", path: "profile/enterprise", index: void 0, caseSensitive: void 0, module: "/build/routes/profile/enterprise-6GGQZRRG.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile/personal": { id: "routes/profile/personal", parentId: "root", path: "profile/personal", index: void 0, caseSensitive: void 0, module: "/build/routes/profile/personal-R2JP5Y2N.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "b605113f", hmr: void 0, url: "/build/manifest-B605113F.js" };

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
  "routes/profile/enterprise": {
    id: "routes/profile/enterprise",
    parentId: "root",
    path: "profile/enterprise",
    index: void 0,
    caseSensitive: void 0,
    module: enterprise_exports
  },
  "routes/policies/privacy": {
    id: "routes/policies/privacy",
    parentId: "root",
    path: "policies/privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/profile/personal": {
    id: "routes/profile/personal",
    parentId: "root",
    path: "profile/personal",
    index: void 0,
    caseSensitive: void 0,
    module: personal_exports
  },
  "routes/policies/terms": {
    id: "routes/policies/terms",
    parentId: "root",
    path: "policies/terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/index-alt": {
    id: "routes/index-alt",
    parentId: "root",
    path: "index-alt",
    index: void 0,
    caseSensitive: void 0,
    module: index_alt_exports
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
