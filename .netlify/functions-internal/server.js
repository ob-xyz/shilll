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
var global_default = "/build/_assets/global-ZIXTYA64.css";

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

// app/routes/index copy.tsx
var index_copy_exports = {};
__export(index_copy_exports, {
  default: () => Index
});

// public/img/ja.png
var ja_default = "/build/_assets/ja-HE6EAVYE.png";

// app/routes/index copy.tsx
var import_react3 = require("@remix-run/react");

// public/img/ja7.png
var ja7_default = "/build/_assets/ja7-DQ7XLZVS.png";

// app/routes/index copy.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/index copy.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/contact", children: "Contact" }, void 0, !1, {
      fileName: "app/routes/index copy.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index copy.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index copy.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Shilll" }, void 0, !1, {
      fileName: "app/routes/index copy.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index copy.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index copy.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Index2
});
var import_react5 = require("@remix-run/react");

// app/components/altcha.tsx
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function AltchaWrapper() {
  let [isMounted, setIsMounted] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    setIsMounted(!0), import("altcha").catch((err) => console.error("Altcha load error:", err));
  }, []), isMounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { height: "80px" } }, void 0, !1, {
    fileName: "app/components/altcha.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// public/img/social/info.png
var info_default = "/build/_assets/info-FQKLT5OI.png";

// app/routes/contact.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "subscribe-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 19,
      columnNumber: 14
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Business Email Address *" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "submit", type: "submit", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: "36b8c", type: "hidden", name: "l", checked: !0, value: "36b8c160-7d12-4103-aaba-8e3cd90d9d64" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Shilll" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 34,
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
  action: () => action,
  default: () => Index3
});
var import_react6 = require("react"), import_react7 = require("@remix-run/react"), import_node = require("@remix-run/node");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-HUT5AP3Y.png";

// app/routes/index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function action({ request }) {
  let email = (await request.formData()).get("email");
  return console.log("New Poast Subscriber:", email), (0, import_node.json)({ success: !0 });
}
function Index3() {
  let [showModal, setShowModal] = (0, import_react6.useState)(!1), navigation = (0, import_react7.useNavigation)(), actionData = (0, import_react7.useActionData)();
  return (0, import_react6.useEffect)(() => {
    let isSubscribed = localStorage.getItem("thepoast_subscribed"), hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");
    if (!isSubscribed && !hasSeenThisSession) {
      let timer = setTimeout(() => {
        setShowModal(!0), sessionStorage.setItem("thepoast_seen_session", "true");
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, []), (0, import_react6.useEffect)(() => {
    let handleEsc = (event) => {
      event.key === "Escape" && setShowModal(!1);
    };
    return window.addEventListener("keydown", handleEsc), () => window.removeEventListener("keydown", handleEsc);
  }, []), (0, import_react6.useEffect)(() => {
    actionData != null && actionData.success && (localStorage.setItem("thepoast_subscribed", "true"), setShowModal(!1));
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: [
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "modal-overlay", onClick: () => setShowModal(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "logo", src: ja1_default, alt: "Canada Poast Logo" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Subscribe to Canada Poast's free newsletter" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Get today's news, plus one trending podcast, and exclusive subscriber-only insights" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", action: "https://app.canadapoast.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "submit", type: "submit", children: navigation.state === "submitting" ? "..." : "Subscribe" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", checked: !0, value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "dismiss-text", onClick: () => setShowModal(!1), children: "No thanks! I'm already subscribed" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "/contact", children: "Contact" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "headerimg", src: ja7_default, alt: "Shilll" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/info.tsx
var info_exports = {};
__export(info_exports, {
  default: () => Index4,
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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: showscroll_default }
];
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "moreinfo-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "logo", src: ja_default, alt: "The Poast Logo" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "info", to: "/info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: info_default, alt: "More Info" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 27,
        columnNumber: 14
      }, this) }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/info.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "profile-outside", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "headerimg", src: cs_default, alt: "It's me (Chris Signore)" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inner-profile", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Chris Signore" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 39,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "social", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "li", href: "https://linkedin.com/in/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: linkedin_default, alt: "LinkedIn" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 42,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 41,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "x", href: "https://x.com/chrissignore", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: x_default, alt: "X (Twitter)" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 45,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 44,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/info.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/info.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/info.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "subscribe", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Contact Shilll" }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "logo-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "post", action: "https://app.shilll.com/subscription/form", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "text", name: "firstName", placeholder: "First Name *" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 56,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 55,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "input-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 59,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, !1, {
              fileName: "app/routes/info.tsx",
              lineNumber: 60,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/info.tsx",
            lineNumber: 58,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AltchaWrapper, {}, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 62,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { id: "36b8c", type: "hidden", name: "l", checked: !0, value: "36b8c160-7d12-4103-aaba-8e3cd90d9d64" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 63,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
            fileName: "app/routes/info.tsx",
            lineNumber: 64,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/info.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/info.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/info.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/info.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/info.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/info.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index5
});
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "logo", src: ja_default, alt: "Shilll Logo" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "outer-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "inner-header2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { to: "/contact", children: "Contact" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "err", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "404 | This page could not be found." }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 19,
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
var assets_manifest_default = { entry: { module: "/build/entry.client-776IHDJE.js", imports: ["/build/_shared/chunk-AVNBQUPV.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-P3DXOTOZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-256LLVOC.js", imports: ["/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-HEJ3Q6L5.js", imports: ["/build/_shared/chunk-JVLWWGMQ.js", "/build/_shared/chunk-ERMIYI7Z.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index copy": { id: "routes/index copy", parentId: "root", path: "index copy", index: void 0, caseSensitive: void 0, module: "/build/routes/index copy-ZA3ZC25W.js", imports: ["/build/_shared/chunk-JVLWWGMQ.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZVKHPEVR.js", imports: ["/build/_shared/chunk-JVLWWGMQ.js", "/build/_shared/chunk-ERMIYI7Z.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/info": { id: "routes/info", parentId: "root", path: "info", index: void 0, caseSensitive: void 0, module: "/build/routes/info-G6I524EY.js", imports: ["/build/_shared/chunk-ERMIYI7Z.js", "/build/_shared/chunk-DAFTH56S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "b11c7321", hmr: void 0, url: "/build/manifest-B11C7321.js" };

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
  "routes/index copy": {
    id: "routes/index copy",
    parentId: "root",
    path: "index copy",
    index: void 0,
    caseSensitive: void 0,
    module: index_copy_exports
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
