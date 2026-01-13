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
      lineNumber: 13,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-signup", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Screw it, let's do it." }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 17,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Stay informed with Shilll" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 21,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 22,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/footer.tsx",
            lineNumber: 20,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 25,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 26,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 19,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 16,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Company" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 32,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "Home" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 33,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/about", children: "About" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 34,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 31,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Newsletters" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 37,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { title: "Jeffamazon", href: "https://jeffamazon.com/", rel: "noopener noreferrer", children: "Jeffamazon" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 38,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { title: "The Poast", href: "https://thepoast.com/", rel: "noopener noreferrer", children: "The Poast" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 39,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 36,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 30,
        columnNumber: 1
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 15,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/policies/privacy", children: "Privacy Policy" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 47,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 48,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 46,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://linkedin.com/company/signore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 54,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 53,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:chris@shilll.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 57,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 56,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 52,
        columnNumber: 3
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 44,
      columnNumber: 1
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 11,
    columnNumber: 1
  }, this);
}

// app/root.tsx
var import_react4 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-QSBLFQQN.css";

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
  title: "Shilll",
  description: "Empowering individuals.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/ads/advertise-with-us.tsx
var advertise_with_us_exports = {};
__export(advertise_with_us_exports, {
  default: () => Index
});
var import_react5 = require("@remix-run/react");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-HE6EAVYE.png";

// public/img/ja3.png
var ja3_default = "/build/_assets/ja3-JKNJMIRL.png";

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

// app/routes/ads/advertise-with-us.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ads-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Reach 44K+ of the world's most decisive people" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We're the 1 min newsletters helping businesses do more \u{1F680}" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Request quote" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ja3_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: [
        "Connect with your next customers on ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 39,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "text", to: "/ads/ad-form", children: "Our audience is highly vetted, decisive, and always looking for what's new. So whether you want to use videos, images, or words, there's a Jeffamazon ad format that'll help you reach our audience." }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content3sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: imageads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 45,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Image Ads" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Image ads allow you to showcase your product or service with plain jane text and a single photo." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Launch campaign" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 51,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: videoads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Video Ads" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Video ads are short clips that turn your offer into content people are more likely to engage in." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Launch campaign" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 63,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content3sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: carouselads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 73,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Carousel Ads" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Carousel ads automatically rotate up to six horizontally-shaped images to showcase multiple products." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Launch campaign" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 79,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: textads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Text Ads" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Text ads are the most simple and frictionless way to get your brands message across our audience." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Launch campaign" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 91,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 84,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content3sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: quickads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 101,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Mini Ads" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Mini ads appear above our feed, giving you an early chance to promote your product or service." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Launch campaign" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 108,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 107,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 104,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: recads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 113,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Rec Ads" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 117,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Rec ads give you a widescreen image and a CTA button to maximizes your." }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 118,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Launch campaign" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 120,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 119,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 116,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 112,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 98,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content3smm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "boxmat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "floatimg2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: takeoverads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Takeover Ads" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Takeover ads give you a widescreen image and a CTA button to maximizes your engagement." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Launch campaign" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 135,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 132,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 128,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 126,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "82%" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 146,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Most likely to try something new" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 147,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 145,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "10X" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 150,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "More engagement per subscriber than the average newsletter." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 151,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 149,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "5X" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 154,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "More likely to click Jeffamazon ads over social media ads." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 153,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 143,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "text", to: "/ads/ad-form", children: '" Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.' }, void 0, !1, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "SOURCE" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 162,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 165,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 161,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ad-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Reach 32K+ of the world's most decisive people" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We're the daily newsletter helping businesses do more." }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "firstName", required: !0, placeholder: "First Name *" }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 180,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "lastName", required: !0, placeholder: "Last Name *" }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 181,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "company", required: !0, placeholder: "Company *" }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 182,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Business Email Address *" }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 183,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "submit", type: "submit", children: "Request quote" }, void 0, !1, {
              fileName: "app/routes/ads/advertise-with-us.tsx",
              lineNumber: 184,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 179,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 186,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: "82687", type: "hidden", name: "l", value: "82687238-ae68-46c7-98ad-183fbf4cfea0" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 187,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/ads/advertise-with-us.tsx",
            lineNumber: 188,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 178,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: recads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/advertise-with-us.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/advertise-with-us.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/advertise-with-us.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ads/advertise-with-us.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/policies/checkmarks.tsx
var checkmarks_exports = {};
__export(checkmarks_exports, {
  default: () => Index2
});

// public/img/bluecheck.png
var bluecheck_default = "/build/_assets/bluecheck-MKACVA5U.png";

// public/img/goldcheck.png
var goldcheck_default = "/build/_assets/goldcheck-RK5LKHI4.png";

// public/img/graycheck.png
var graycheck_default = "/build/_assets/graycheck-7SQNBKZV.png";

// public/img/blackcheck.png
var blackcheck_default = "/build/_assets/blackcheck-QIRPZK6Q.png";

// app/routes/policies/checkmarks.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-verification", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/policies/checkmarks.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/checkmarks.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content-verification2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "About checkmarks in the Jeffamazon newsletter." }, void 0, !1, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Jeffamazon applies checkmarks as visual identity signals on account profiles to provide more context about\u2014and help distinguish\u2014different types of profiles. All of these indicators are applied by Jeffamazon, not the profile holder." }, void 0, !1, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Blue checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "The blue checkmark means that a account is a real person who meets our eligibility requirements. These accounts typically always represent an individual and have under gone review and confirmation that confirms they meet the authentic content and people standards we ahere to." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: bluecheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Gold checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "The gold checkmark indicates that the account is an official organization, company, or business." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: goldcheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Gray checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "The gray checkmark indicates that an account represents a government organization or is an official government representative." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: graycheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Black checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "The black checkmark indicates that an account is anonymous, pseudonymous, or a parody." }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: blackcheck_default, alt: "Checkmark" }, void 0, !1, {
          fileName: "app/routes/policies/checkmarks.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/checkmarks.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/checkmarks.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policies/checkmarks.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/policies/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Index3
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content-privacy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/privacy.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content-privacy2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Privacy Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Jeffamazon respects your privacy and values your trust. This Privacy Policy (\u201CPolicy\u201D) describes how we collect and use your information and explains your rights and options. This Policy applies to these services (which we call the \u201CServices\u201D in this Policy):" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "websites, the Jeffamazon Store, paid products" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "newsletters and other disseminated content" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "merchandise, mobile apps and related social media pages" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "anywhere else we gather information about you and refer to this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "This Policy is grouped into these sections:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "about us and this Policy;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "information we collect" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "how we use information, including for advertising purposes;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "when we disclose information to other parties, including for advertising purposes; and" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "your rights and how to exercise them." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
        "We encourage you to read this Policy carefully. If you have questions, please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "1. About This Policy And Us" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(a)Who we are" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Jeffamazon, Inc. (\u201CJeffamazon,\u201D \u201Cwe\u201D, \u201Cour\u201D or \u201Cus\u201D) operates the Services. This Policy supplements and is governed by our Terms of Service (\u201CTerms\u201D). Capitalized terms used but not defined in this Policy are defined in our Terms. The Terms describe how the Services work in general and its conditions and requirements of use." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(b) When this Policy applies" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "This Policy applies when you use the Services, effective as of the Last Updated date above. By using or accessing the Services, you signify that you have read, understand and agree to be bound by this Policy and the Terms." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Because the Services change often, this Policy may change over time. Anytime we modify the Policy, we will post a revised version on the Services and update the Last Updated date above. If you have given us your contact information, we will notify you before any material changes take effect, so you have time to review them." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Certain parts of the Services work differently, and some information falls outside this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "The Services may contain links to and from third-party websites and services. This Policy doesn\u2019t apply to outside of our Services. See Third Party Services to learn more." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "If you are a current or former employee or contractor of ours, this Policy does not apply to you. You may contact us about your privacy practices and rights at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(c) Location-specific sections" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
        "The Services operates from the United States, but this Policy applies worldwide. Our practices generally do not differ based on your location, but your rights and choices depend in part on the law where you live. For example, you may have rights under: (1) \u201CGDPR\u201D: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA PROTECTION ACT 2018" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "As a result, certain sections of this Policy apply to you only if you reside in a particular location:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Residents of jurisdictions where GDPR applies \u2013 such as U.K., EU and Swiss residents \u2013 should consult the Rights under GDPR and International Data Transfers sections." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Residents of Mexico should consult the Aviso de Privacidad addendum." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Canadian residents should consult the Canadian users section." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
        "If those sections apply to you, they override any contrary descriptions elsewhere in the Policy as they relate to you. Please contact us at ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(a) Information you provide" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "You may use the Services without providing any information about yourself. However, to use some aspects of the Services, we will need information about you, such as if you:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Purchase our Offerings or services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Contact or communicate with us" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Subscribe or opt-in to our newsletters, alerts, or other communications" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Participate in a contest or promotion or redeem a prize" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Information you provide may include your name or email address (\u201Cpersonal identifiers\u201D)." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We generally don\u2019t collect (or want!) your sensitive information, and we strive to limit the amount of sensitive personal information we collect." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "For instance, make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "In the event you provide sensitive personal information to us, we use it only for our operational business purposes, and we do not disclose it to others for any other purpose." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(b) Information collected when you use the Services" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "As you use the Services, cookies and other technology we use will generate technical data about which features you use, how you use them and the devices you use to access our services. This information may include:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "\u201CCommercial Information\u201D about your orders of Offerings or other products or services from us and interactions with Jeffamazon Store products." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "\u201CDevice Information\u201D related to the device you use to interact with the Services, such as your device\u2019s IP address, advertising IDs (resettable, random numbers, such as the device\u2019s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "\u201CInternet Activity\u201D related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "MANAGING COOKIES AND SIMILAR TECHNOLOGIES: WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "ACCEPT ALL COOKIES;" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "REJECT ALL NON-ESSENTIAL COOKIES; OR" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME." }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(c) Information we generate" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We infer new information from other data we collect, including using automated means to generate information about your likely preferences or other characteristics (\u201Cinferences\u201D)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(2) How We Use Your Information" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We use each of the categories of personal information described above for the following business and commercial purposes. The activities below can involve outside companies, agents or contractors (\u201Cservice providers\u201D) to whom we disclose your information for these purposes (discussed further below in Section 4)." }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(a)To provide our content, services and products to you" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Deliver content you request" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Provide you with customer support and respond to your requests" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Complete your orders" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Communicate with you about our services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(b)To manage your subscriptions or fulfill product orders" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Manage your content subscriptions" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Deliver and process payments for Offerings you order" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(c) To improve our services and develop new ones" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Administer focus groups, market studies and surveys" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Review interactions with customer teams to improve our quality of service" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Develop new content and services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(d)To allow personalized ads and create audiences for third-party advertisers" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Administer sweepstakes, contests, discounts or other offers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Gather data and work with third parties to show you personalized ads on behalf of advertisers" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Communicate with you about products or services that we believe may interest you" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE PURPOSES." }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(e) To prevent, detect and fight fraud and other illegal or unauthorized activities" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Find and address ongoing, suspected or alleged violations of our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Retain data related to violations of our Terms to prevent against recurrences" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Enforce or exercise our rights; for example, those in our Terms" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(f)To create broader findings with aggregate and deidentified data" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results." }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(g) To ensure legal compliance" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Verify copyright or IP claims" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Comply with legal requirements" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Assist law enforcement" }, void 0, !1, {
          fileName: "app/routes/policies/privacy.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "(h) Purposes" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We rely on the following purposes to collect and use your information as described in this Policy:" }, void 0, !1, {
        fileName: "app/routes/policies/privacy.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("u", { children: "Commercial purposes" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("u", { children: "Business purposes" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("u", { children: "Comply with applicable laws and regulations" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("u", { children: "Consent" }, void 0, !1, {
            fileName: "app/routes/policies/privacy.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          ": From time to time, we may ask for your consent to collect specific information, such as your precise geolocation, or use your information for certain specific reasons, like providing your email address or phone number for direct marketing purposes, or for the use of certain types of cookies for personalized advertising. In general, you may withdraw your consent by changing your settings (such as browser or device settings) or following instructions provided with information we send you on a consent basis (such as clicking \u2018unsubscribe\u2019 in any email we send you). You may always withdraw your consent at any time \u2013 just contact us at ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "mailto:privacyrequest@jeffamazon.com", children: "privacyrequest@jeffamazon.com" }, void 0, !1, {
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

// app/routes/ads/ad-formats.tsx
var ad_formats_exports = {};
__export(ad_formats_exports, {
  default: () => Index4
});
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "adformats-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Reach 32K+ of the world's most decisive people" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "We're the daily newsletter helping businesses do more \u{1F680}" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Request quote" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: ja3_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: [
        "Connect with your next customers on ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Jeffamazon" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 37,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: "Our audience is highly vetted, decisive, and always looking for what's new. So whether you want to use videos, images, or words, there's a Jeffamazon ad format that'll help you reach our audience." }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: imageads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Image Ads" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 44,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 44,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: "Image ads allow you to showcase your product or service with plain jane text and a single photo." }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Learn more" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: videoads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Video Ads" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 54,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 54,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: "Video ads are short clips that turn your offer into content people are more likely to engage in." }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Learn more" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: carouselads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 60,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Carousel Ads" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 64,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 64,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: "Carousel ads automatically rotate up to six horizontally-shaped images to showcase multiple products." }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Learn more" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: textads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Text Ads" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 74,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 74,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: "Text ads are the most simple and frictionless way to get your brands message across our audience." }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Learn more" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: quickads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Mini Ads" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 84,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 84,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: "Mini ads appear above our feed, giving you an early chance to promote your product or service." }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Learn more" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 86,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: takeoverads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Takeover Ads" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 94,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 94,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: "Takeover ads give you a widescreen image and a CTA button to maximizes your engagement." }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "pricebtn", to: "/ads/ad-form", children: "Learn more" }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "82%" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Most likely to try something new" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "10X" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 107,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "More engagement per subscriber than the average newsletter." }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 106,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "5X" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "More likely to click Jeffamazon ads over social media ads." }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 100,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content2555", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "text", to: "/ads/ad-form", children: '" Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.' }, void 0, !1, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "SOURCE" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 119,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone." }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 122,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ad-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Reach 32K+ of the world's most decisive people" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "We're the daily newsletter helping businesses do more." }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "text", name: "firstName", required: !0, placeholder: "First Name *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-formats.tsx",
              lineNumber: 137,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "text", name: "lastName", required: !0, placeholder: "Last Name *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-formats.tsx",
              lineNumber: 138,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "text", name: "company", required: !0, placeholder: "Company *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-formats.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Business Email Address *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-formats.tsx",
              lineNumber: 140,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "submit", type: "submit", children: "Request quote" }, void 0, !1, {
              fileName: "app/routes/ads/ad-formats.tsx",
              lineNumber: 141,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 143,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { id: "82687", type: "hidden", name: "l", value: "82687238-ae68-46c7-98ad-183fbf4cfea0" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 144,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/ads/ad-formats.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 135,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: recads_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/ads/ad-formats.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-formats.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-formats.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ads/ad-formats.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/policies/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Index5
});

// public/img/bg.jpg
var bg_default = "/build/_assets/bg-KNEKVA3I.jpg";

// public/img/bg1.jpg
var bg1_default = "/build/_assets/bg1-4DYQZ6RJ.jpg";

// app/routes/policies/terms.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content-aboutus", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content-aboutus2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Staying informed is hard." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Jeffamazon is a daily newsletter for go-getters who like to stay informed about the business world." }, void 0, !1, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policies/terms.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content-aboutus3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { children: "GETTING STARTED" }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: "Start your journey with Jeffamazon." }, void 0, !1, {
          fileName: "app/routes/policies/terms.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/policies/terms.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: bg_default, alt: "Sign up free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Sign up for free" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Sign up for free to get the business world delivered straight to your inbox every day of the week." }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 23,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 28,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, !1, {
                fileName: "app/routes/policies/terms.tsx",
                lineNumber: 29,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 27,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 31,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 32,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: bg1_default }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Advertise with us" }, void 0, !1, {
            fileName: "app/routes/policies/terms.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
            "Jeffamazon helps you diversify your brand by placing your content where people do business \u2014 the email inbox. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/policies/terms.tsx",
              lineNumber: 39,
              columnNumber: 122
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "mailto:chris@jeffamazon.com", className: "pricebtn", children: "Start a campaign" }, void 0, !1, {
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

// app/routes/ads/ad-form.tsx
var ad_form_exports = {};
__export(ad_form_exports, {
  default: () => Index6
});
var import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index6() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "adform-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/ads/ad-form.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ads/ad-form.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h4", { children: "ADVERTISE WITH US" }, void 0, !1, {
            fileName: "app/routes/ads/ad-form.tsx",
            lineNumber: 16,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Just reach out." }, void 0, !1, {
            fileName: "app/routes/ads/ad-form.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-form.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "email", type: "text", name: "firstName", required: !0, placeholder: "First Name *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-form.tsx",
              lineNumber: 21,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "email", type: "text", name: "lastName", required: !0, placeholder: "Last Name *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-form.tsx",
              lineNumber: 22,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "email", type: "text", name: "company", required: !0, placeholder: "Company *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-form.tsx",
              lineNumber: 23,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Business Email Address *" }, void 0, !1, {
              fileName: "app/routes/ads/ad-form.tsx",
              lineNumber: 24,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "submit", type: "submit", children: "Request quote" }, void 0, !1, {
              fileName: "app/routes/ads/ad-form.tsx",
              lineNumber: 25,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ads/ad-form.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/ads/ad-form.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/routes/ads/ad-form.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/ads/ad-form.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ads/ad-form.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-form.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: ja3_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/ads/ad-form.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/ads/ad-form.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-form.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: [
        "Connect with your next customers on ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/ads/ad-form.tsx",
          lineNumber: 37,
          columnNumber: 49
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ads/ad-form.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react7.Link, { className: "text", to: "/subscribe", children: "Our audience is bold, decisive, and always looking for what's new. So whether you want to use videos, images, or words, there's a Shilll ad format that'll help you reach our audience." }, void 0, !1, {
        fileName: "app/routes/ads/ad-form.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ads/ad-form.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ads/ad-form.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => Index7
});
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Index7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "subscribe-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { children: "SIGN UP FOR SHILLL" }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Stay ahead." }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { className: "email", type: "text", name: "lastName", placeholder: "Last Name *" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 24,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "submit", type: "submit", children: "Send it" }, void 0, !1, {
              fileName: "app/routes/subscribe.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 28,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: ja3_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: [
        "Stay ahead with ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 38,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Link, { className: "text", to: "/subscribe", children: [
        "Don't waste good mornings scrolling to stay ahead. ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "Shilll is the 1 min antidote keeping bold, decisive people in the loop" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 39,
          columnNumber: 99
        }, this),
        " about what matters locally and across the world."
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index8
});
var import_react9 = require("@remix-run/react");

// public/img/ja6.png
var ja6_default = "/build/_assets/ja6-JKBQRTZX.png";

// public/img/ja7.png
var ja7_default = "/build/_assets/ja7-OQPRNO2G.png";

// public/img/cs.jpg
var cs_default = "/build/_assets/cs-3THKTAXS.jpg";

// app/routes/about.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Index8() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "about-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h4", { children: "Hey, I'm Chris" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: [
            "Aspiring writer.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 19,
              columnNumber: 33
            }, this),
            "Aspiring entrepreneur.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "But I'm best known for my daily newsletter Jeffamazon \u{1F680}" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "pricebtn", to: "/subscribe", children: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 23,
          columnNumber: 13
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: cs_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: [
        "Hey I'm ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "Chris Signore" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 31,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "text", to: "/subscribe", children: "I'm best known for my newsletters." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "text", to: "/subscribe", children: "But I'm also an expert in company building and designing and engineering products mostly from scratch." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 35,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "text", to: "/subscribe", children: "A big joy in my life is building things I can easily share with others." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "text", to: "/subscribe", children: "So thank you for just being here." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inner-content251", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "text", to: "/subscribe", children: "My first products." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inner-content3sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: ja6_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 46,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Jeffamazon" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Daily business news" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { className: "pricebtn", href: "https://jeffamazon.com/subscribe", children: "Subscribe for free" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 52,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: ja7_default, alt: "The Poast newsletter image" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "The Poast" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Weekly local news" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { className: "pricebtn", href: "https://thepoast.com/subscribe", children: "Subscribe for free" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 64,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inner-content25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "text", to: "/subscribe", children: '" A big joy in my life is building things I can share with YOU.' }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "CHRIS SIGNORE" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Founder" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 71,
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
  default: () => Index9
});
var import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Index9() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: ja1_default, alt: "Jeffamazon Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inner-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h4", { children: "EMPOWERING INDIVIDUALS" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Less Scroll. More Life." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "1-minute newsletters designed for your mind \u2728" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "submit", type: "submit", children: "Send it" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inner-content1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: ja3_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "Shilll" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        " is a bespoke publisher"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Link, { className: "text", to: "/subscribe", children: [
        "Shilll replaces infinite scrolling with intentional insights. ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "Our 1 min newsletters are meticulously designed" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 39,
          columnNumber: 110
        }, this),
        " to empower the minds of individuals across the world."
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inner-content3sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: ja6_default, alt: "Jeffamazon newsletter image" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 44,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Jeffamazon" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Daily business news" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { className: "pricebtn", href: "https://jeffamazon.com/subscribe", children: "Subscribe for free" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 50,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "boxmat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "floatimg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: ja7_default, alt: "The Poast newsletter image" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "The Poast" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Weekly local news" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { className: "pricebtn", href: "https://thepoast.com/subscribe", children: "Subscribe for free" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 62,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inner-content255", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "side1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "LEADERSHIP" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 12
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "noclick", children: "Founder" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "noclick", children: "Chris Signore" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Link, { className: "pricebtn", to: "/about", children: "About" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "side2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: cs_default, alt: "Founder image" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inner-content2555", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Link, { className: "text", to: "/about", children: `" In a world full of AI brainrot it's good to know what really matters.` }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "tag", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "CHRIS SIGNORE" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 85,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Founder" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "inner-content3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Get what matters delivered straight to your inbox." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Link, { className: "text", to: "/subscribe", children: "Subscribe \u2192" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Advertise" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Want to post? We're looking for new advertisers." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react10.Link, { className: "text", to: "/ads/ad-form", children: "Get in touch \u2192" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 93,
      columnNumber: 8
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7VPN2UI5.js", imports: ["/build/_shared/chunk-4RXSKUQF.js", "/build/_shared/chunk-S4ZNHW4H.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6NISD44E.js", imports: ["/build/_shared/chunk-552RS725.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-74ZJ55IQ.js", imports: ["/build/_shared/chunk-CQ6L7O6L.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ads/ad-form": { id: "routes/ads/ad-form", parentId: "root", path: "ads/ad-form", index: void 0, caseSensitive: void 0, module: "/build/routes/ads/ad-form-ZJHATKVX.js", imports: ["/build/_shared/chunk-7GTGVB7L.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ads/ad-formats": { id: "routes/ads/ad-formats", parentId: "root", path: "ads/ad-formats", index: void 0, caseSensitive: void 0, module: "/build/routes/ads/ad-formats-JAPI56JX.js", imports: ["/build/_shared/chunk-SMMWDJKR.js", "/build/_shared/chunk-7GTGVB7L.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ads/advertise-with-us": { id: "routes/ads/advertise-with-us", parentId: "root", path: "ads/advertise-with-us", index: void 0, caseSensitive: void 0, module: "/build/routes/ads/advertise-with-us-RBI56FN7.js", imports: ["/build/_shared/chunk-SMMWDJKR.js", "/build/_shared/chunk-7GTGVB7L.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-YBWJV4PT.js", imports: ["/build/_shared/chunk-CQ6L7O6L.js", "/build/_shared/chunk-7GTGVB7L.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/checkmarks": { id: "routes/policies/checkmarks", parentId: "root", path: "policies/checkmarks", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/checkmarks-Y2LBBYAG.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/privacy": { id: "routes/policies/privacy", parentId: "root", path: "policies/privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/privacy-AHIXOYT3.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policies/terms": { id: "routes/policies/terms", parentId: "root", path: "policies/terms", index: void 0, caseSensitive: void 0, module: "/build/routes/policies/terms-YUU3Q6ML.js", imports: ["/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-WHGZSA6H.js", imports: ["/build/_shared/chunk-7GTGVB7L.js", "/build/_shared/chunk-H74JKBWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "b905cf00", hmr: void 0, url: "/build/manifest-B905CF00.js" };

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
  "routes/ads/advertise-with-us": {
    id: "routes/ads/advertise-with-us",
    parentId: "root",
    path: "ads/advertise-with-us",
    index: void 0,
    caseSensitive: void 0,
    module: advertise_with_us_exports
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
  "routes/ads/ad-form": {
    id: "routes/ads/ad-form",
    parentId: "root",
    path: "ads/ad-form",
    index: void 0,
    caseSensitive: void 0,
    module: ad_form_exports
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
