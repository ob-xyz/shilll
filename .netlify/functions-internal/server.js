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
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-NB22QPDU.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
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
  description: "To the moon.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
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

// app/routes/jeffamazon.tsx
var jeffamazon_exports = {};
__export(jeffamazon_exports, {
  default: () => Index
});
var import_react4 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react3.useState)(!1);
  return (0, import_react3.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// public/img/social/jeffamazon.png
var jeffamazon_default = "/build/_assets/jeffamazon-6IPOC62B.png";

// public/img/social/poast.png
var poast_default = "/build/_assets/poast-THKZBTWP.png";

// public/img/social/info.png
var info_default = "/build/_assets/info-FQKLT5OI.png";

// public/img/ja.png
var ja_default = "/build/_assets/ja-HE6EAVYE.png";

// app/routes/jeffamazon.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "subscribe-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/routes/jeffamazon.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "x", to: "/thepoast", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: poast_default, alt: "The Poast" }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 17,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "liactive", to: "/jeffamazon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: jeffamazon_default, alt: "Jeffamazon" }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 29,
        columnNumber: 14
      }, this) }, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jeffamazon.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/jeffamazon.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", checked: !0, value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
        fileName: "app/routes/jeffamazon.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jeffamazon.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jeffamazon.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/jeffamazon.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/thepoast.tsx
var thepoast_exports = {};
__export(thepoast_exports, {
  default: () => Index2
});
var import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "subscribe-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/routes/thepoast.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "xactive", to: "/thepoast", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: poast_default, alt: "The Poast" }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 17,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "li", to: "/jeffamazon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: jeffamazon_default, alt: "Jeffamazon" }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 29,
        columnNumber: 14
      }, this) }, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/thepoast.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/thepoast.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", checked: !0, value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
        fileName: "app/routes/thepoast.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/thepoast.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/thepoast.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/thepoast.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Index3
});
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "subscribe-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "social", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 16,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 15,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 21,
        columnNumber: 14
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Business Email Address *" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "submit", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { id: "36b8c", type: "hidden", name: "l", checked: !0, value: "36b8c160-7d12-4103-aaba-8e3cd90d9d64" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index4
});
var import_react7 = require("@remix-run/react");

// public/img/ja7.png
var ja7_default = "/build/_assets/ja7-DQ7XLZVS.png";

// app/routes/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/contact", children: "Contact" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "The Poast" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/info.tsx
var info_exports = {};
__export(info_exports, {
  default: () => Index5,
  links: () => links2
});
var import_react8 = require("@remix-run/react");

// app/style/scss/components/showscroll.css
var showscroll_default = "/build/_assets/showscroll-FNF7IES6.css";

// public/img/cs.jpg
var cs_default = "/build/_assets/cs-3THKTAXS.jpg";

// public/img/social/linkedin.png
var linkedin_default = "/build/_assets/linkedin-34LPKGU3.png";

// public/img/social/x.png
var x_default = "/build/_assets/x-2OTC4MLH.png";

// app/routes/info.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "moreinfo-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "outer-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "social", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { className: "infoactive", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 25,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/", children: "Home" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 31,
          columnNumber: 14
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/info.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "profile-outside", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "headerimg", src: cs_default, alt: "It's me (Chris Signore)" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-profile", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Chris Signore" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "social", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "li", href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 44,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 43,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "x", href: "https://x.com/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 46,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/info.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/info.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "subscribe", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Contact Shilll" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "logo-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 58,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 61,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 62,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/info.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 64,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { id: "36b8c", type: "hidden", name: "l", checked: !0, value: "36b8c160-7d12-4103-aaba-8e3cd90d9d64" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 65,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/info.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/info.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/info.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/info.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index6
});
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Index6() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "outer-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "social", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "x", to: "/thepoast", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: poast_default, alt: "The Poast" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 17,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "li", to: "/jeffamazon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: jeffamazon_default, alt: "Jeffamazon" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/$.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/advertise", children: "Advertise" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "err", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "404 | This page could not be found." }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-N55ZE3O2.js", imports: ["/build/_shared/chunk-4FC7QMFT.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-B7VICHSK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-TEDYMSRE.js", imports: ["/build/_shared/chunk-YUL2NAKO.js", "/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-3MHL3UHS.js", imports: ["/build/_shared/chunk-4H3VHOXK.js", "/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3VDQX4YH.js", imports: ["/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/info": { id: "routes/info", parentId: "root", path: "info", index: void 0, caseSensitive: void 0, module: "/build/routes/info-ULG6FBPH.js", imports: ["/build/_shared/chunk-4H3VHOXK.js", "/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jeffamazon": { id: "routes/jeffamazon", parentId: "root", path: "jeffamazon", index: void 0, caseSensitive: void 0, module: "/build/routes/jeffamazon-XGNUSYDV.js", imports: ["/build/_shared/chunk-4H3VHOXK.js", "/build/_shared/chunk-YUL2NAKO.js", "/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/thepoast": { id: "routes/thepoast", parentId: "root", path: "thepoast", index: void 0, caseSensitive: void 0, module: "/build/routes/thepoast-AG2QC3KH.js", imports: ["/build/_shared/chunk-4H3VHOXK.js", "/build/_shared/chunk-YUL2NAKO.js", "/build/_shared/chunk-JOIKWTUL.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "c480e5dc", hmr: void 0, url: "/build/manifest-C480E5DC.js" };

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
  "routes/jeffamazon": {
    id: "routes/jeffamazon",
    parentId: "root",
    path: "jeffamazon",
    index: void 0,
    caseSensitive: void 0,
    module: jeffamazon_exports
  },
  "routes/thepoast": {
    id: "routes/thepoast",
    parentId: "root",
    path: "thepoast",
    index: void 0,
    caseSensitive: void 0,
    module: thepoast_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/info": {
    id: "routes/info",
    parentId: "root",
    path: "info",
    index: void 0,
    caseSensitive: void 0,
    module: info_exports
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
